import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './main.css';
import { addToList, editRating, removeFromList } from '../redux/musicList';

export default function Main(): JSX.Element {
    
    const { musicList } = useSelector((state: any) => state.musicList);
    const dispatch = useDispatch();

    return (
        <div className="main">
            <div className="content">
                <div className="nav">
                    <div className="search">
                        <input type="text" placeholder="Search for some cool music..." className="search-input" onKeyUp={(e) => {
                            if (e.key === 'Enter' && e.currentTarget.value !== '') {
                                dispatch(addToList({ title: e.currentTarget.value, artist: 'Unknown', plays: Math.floor(Math.random() * 100000), rating: 1 }));
                                let input = document.querySelector('.search-input') as HTMLInputElement;
                                input.value = '';
                            }
                        }} />
                        <button className="search-button" onClick={() => {
                            let input = document.querySelector('.search-input') as HTMLInputElement;
                            if (input.value !== '') {
                                dispatch(addToList({ title: input.value, artist: 'Unknown', plays: Math.floor(Math.random() * 100000), rating: 1 }));
                                input.value = '';
                            }
                        }}>Enter</button>
                    </div>
                </div>
                <div className="list">
                    { musicList.length === 0 ? <div className="empty-list">Your music list is empty. Add some music to it!</div> : null }
                    { musicList.map((item: any, id: number) => {
                        return (
                            <div className="item" key={id}>
                                <div className="item-image">
                                    <img src="https://e7.pngegg.com/pngimages/376/34/png-clipart-itunes-music-apple-lanzzz-work-play-logo-apple-purple-text.png" alt="music note" />
                                </div>
                                <div className="item-info">
                                    <div className="item-title">
                                        Title: {item.title}
                                    </div>
                                    <div className="item-artist">
                                        Author: {item.artist}
                                    </div>
                                    <div className="item-plays">
                                        Plays: {item.plays}
                                    </div>
                                </div>
                                <div className="item-rating">
                                    <div className="item-rating-list">
                                        <div className="rating-text">
                                            Rating:
                                        </div>
                                        <select name="rating" className="rating" onInput={
                                            (e) => {
                                                let rating = e.currentTarget.value;
                                                dispatch(editRating({ title: item.title, artist: item.artist, plays: item.plays, rating: rating }));
                                            }
                                        }>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <button className="item-action-remove" onClick={() => dispatch(removeFromList(
                                        { title: item.title, artist: item.artist, plays: item.plays, rating: item.rating }
                                    ))}>Remove</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}