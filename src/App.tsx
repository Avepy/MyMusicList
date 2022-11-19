import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="init-content">
        <h1>My Music List</h1>
        <button className="main-button" onClick={() => makeAPIRequest()}>Login with Spotify</button>
      </div>
    </div>
  );
}

export default App;

function makeAPIRequest() {
  let clientID = "ccb1fab166c743688211109821984efe";
  let redirectURI = "https://avepy.github.io/MyMusicList/";
  // http://localhost:3000/MyMusicList/

  let url  = "https://accounts.spotify.com/authorize?response_type=token&client_id=" + encodeURIComponent(clientID) + "&redirect_uri=" + encodeURIComponent(redirectURI);

  window.location.href = url;
}