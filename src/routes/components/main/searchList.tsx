import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchListVisibility } from '../../../redux/searchListVisibility';
import { addToList } from '../../../redux/musicList';
import { Props } from '../../../types/ContainerProps';

export default function SearchList({ data, setInputValue }: Props): JSX.Element {

    const dispatch = useDispatch();

    function handleClick(url: string, name: string, artist: string, popularity: number) {
        dispatch(addToList({ title: name, artist: artist, popularity: popularity, url: url }));
        dispatch(setSearchListVisibility(false));
        setInputValue("");
    }

    return (
        <div className="search-list" tabIndex={0} onBlur={() => dispatch(setSearchListVisibility(false))}>
            <div className="search-list-content">
                <div className="search-list-header">
                    Search results:
                </div>
                <div className="search-list-body">
                    <div className="search-list-body-content">
                    { data ? data.tracks.items.map((item: any, index: number) => {
                            return (
                                <div className="search-list-body-content-item" key={index} onClick={() => handleClick(item.album.images[0].url, item.name, item.artists[0].name, item.popularity)}>
                                    <div className="search-list-body-content-item-image">
                                        <img src={item.album.images[0].url} className="search-list-body-content-item-image-img" alt="track cover" />
                                    </div>
                                    <div className="search-list-body-content-item-info">
                                        <div className="search-list-body-content-item-info-title">
                                            Title: {item.name}
                                        </div>
                                        <div className="search-list-body-content-item-info-artist">
                                            Artist: {item.artists[0].name}
                                        </div>
                                        <div className="search-list-body-content-item-info-plays">
                                            Popularity: {item.popularity}
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : <div className="search-list-body-no-data">No data</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}