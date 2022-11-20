import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editRating, removeFromList } from '../../../redux/musicList';

export default function List(): JSX.Element {

    const { musicList } = useSelector((state: any) => state.musicList);
    const dispatch = useDispatch();

    return (
        <div className="list">
            { musicList.length === 0 ? <div className="empty-list">Your music list is empty. Add some music to it!</div> : null }
            { musicList.map((item: any, id: number) => {
                return (
                    <div className="item" key={id}>
                        <div className="item-image">
                            <img src={item.url} className="item-image-img" alt="music note" />
                        </div>
                        <div className="item-info">
                            <div className="item-title">
                                Title: {item.title}
                            </div>
                            <div className="item-artist">
                                Author: {item.artist}
                            </div>
                            <div className="item-popularity">
                                Popularity: {item.popularity}
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
                                        dispatch(editRating({ title: item.title, artist: item.artist, popularity: item.popularity, rating: rating }));
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
                            <button className="item-action-remove" onClick={() => dispatch(removeFromList({ title: item.title, artist: item.artist, popularity: item.popularity, rating: item.rating }))}>Remove</button>
                        </div>
                    </div>
                );
            })}
            
        </div>
    );
}