import React from 'react';
import './redirect.css';

function Redirect() {
    let url = window.location.href;

    if (url.includes('access_token')) {
        let token = url.split('access_token=')[1].split('&')[0];
        localStorage.setItem('token', token);
    }

    checkAPIConnection();
  return (
    <div className="redirect">
        <div className="redirect-content">
            <div className="ring">Loading
                <span></span>
            </div>
        </div>
    </div>
  );
}

export default Redirect;

async function checkAPIConnection() {
    let url = "https://api.spotify.com/v1/search?q=" + encodeURIComponent("California Dreamin'") + "&type=track";
    let token = localStorage.getItem('token');

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token,
        }
    });
    
    if (response.status === 200) {
        window.location.href = "http://localhost:3000/MyMusicList/#/main";
    }
}