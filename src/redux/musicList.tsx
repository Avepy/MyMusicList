import { createSlice } from '@reduxjs/toolkit';

interface MusicListItems {
    title: string;
    artist: string;
    popularity: number;
    url: string;
    rating: number;
}

export const musicListSlice = createSlice({
    name: 'musicList',
    initialState: {
        musicList: [] as MusicListItems[],
    },
    reducers: {
        addToList: (state, action) => {
            let myList = [...state.musicList, action.payload];
            return {
                ...state,
                musicList: myList,
            }
        },
        editRating: (state, action) => {
            let myList = [...state.musicList];
            
            myList.forEach((item, index) => {
                if (item.title === action.payload.title) {
                    myList[index] = { ...item, rating: action.payload.rating };
                }
            });

            return {
                ...state,
                musicList: myList
            }
        },
        removeFromList: (state, action) => {
            let myList = state.musicList.filter((item) => {
                return item.title !== action.payload.title || item.artist !== action.payload.artist || item.popularity !== action.payload.popularity;
            });
            return {
                ...state,
                musicList: myList,
            }
        }
    }
});

export const { addToList, editRating, removeFromList } = musicListSlice.actions;

export default musicListSlice.reducer;