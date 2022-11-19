import React, { useState } from 'react';

export default function SearchBar(): JSX.Element {

    let timeout: NodeJS.Timeout;
    let data: Promise<JSON>;

    const [inputValue, setInputValue] = useState<string>('');


    async function fetchData(data: string): Promise<any> {
        let url = "https://api.spotify.com/v1/search?q=" + encodeURIComponent(data) + "&type=track";
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    
        let json = await response.json();
    
        if (json.tracks.items.length > 0) {
            return json;
        } else {
            return null;
        }
    }
    
    function keyUpHandler(e: any) {
        clearTimeout(timeout);

        setInputValue(e.currentTarget.value);
    
        timeout = setTimeout(() => {
            if (e.currentTarget.value.length > 0 && e.currentTarget.value.length <= 45) {
                data = fetchData(e.currentTarget.value);
            }
        }, 2000);
    
        if (e.key === 'Enter' && e.currentTarget.value !== '' && e.currentTarget.value.length <= 45) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                data = fetchData(e.currentTarget.value);
            }, 2000);
            // clear input value
        }
    }

    function clickHandler() {
        if (inputValue !== '' && inputValue.length <= 45) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                data = fetchData(inputValue);
            }, 2000);
            // clear input value
        }
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search for some cool music..." className="search-input" maxLength={45} onKeyUp={keyUpHandler}/>
            <button className="search-button" onClick={clickHandler}>Enter</button>
        </div>
    );
}