import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchListVisibility } from '../../../redux/searchListVisibility';
import SearchList from './searchList';

export default function SearchBar(): JSX.Element {

    let timeout: { current: NodeJS.Timeout | null } = useRef(null);;

    const [inputValue, setInputValue] = useState<string>('');
    const [data, setData] = useState<Promise<JSON>>();

    function setInputWrapper(str: string) {
        setInputValue(str);
    }

    const { searchListVisibility } = useSelector((state: any) => state.searchListVisibility);
    const dispatch = useDispatch();

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

        if (response.status === 401) {
            window.location.href = "https://avepy.github.io/MyMusicList/";
            // http://localhost:3000/MyMusicList/
        }
    
        if (json.tracks.items.length > 0) {
            setData(json);
            return json;
        } else {
            return null;
        }
    }
    
    function keyUpHandler(e: any) {
        clearTimeout(timeout.current as NodeJS.Timeout);
    
        timeout.current = setTimeout(() => {
            if (inputValue.length > 0 && inputValue.length <= 45) {
                fetchData(inputValue);
            }
        }, 1500);
    
        if (e.key === 'Enter' && inputValue.length > 0 && inputValue.length <= 45) {
            clearTimeout(timeout.current as NodeJS.Timeout);
            timeout.current = setTimeout(() => {
                fetchData(inputValue);
            }, 1500);
        }
    }

    function clickHandler() {
        if (inputValue !== ' ' && inputValue.length <= 45 && inputValue.length > 0) {
            clearTimeout(timeout.current as NodeJS.Timeout);
            timeout.current = setTimeout(() => {
                fetchData(inputValue);
            }, 1500);
        }
    }

    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Search for some cool music..." value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} className="search-input" maxLength={45} onKeyUp={keyUpHandler} onFocus={() => dispatch(setSearchListVisibility(true))} />
                <button className="search-button" onClick={clickHandler}>Enter</button>
            </div>
            { searchListVisibility && <SearchList data={data} setInputValue={setInputWrapper} /> }
        </div>
    );
}