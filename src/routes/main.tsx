import React from 'react';
import './main.css';
import Container from './components/main/container';
import Nav from './components/main/nav';
import SearchBar from './components/main/searchBar';
import List from './components/main/list';

export default function Main(): JSX.Element {

    let token = localStorage.getItem('token');
    if (token === null) {
        window.location.href = "https://avepy.github.io/MyMusicList/";
        // http://localhost:3000/MyMusicList/
    }

    return (
        <Container>
            <Nav>
                <SearchBar />
            </Nav>
            <List />
        </Container> 
    );
}