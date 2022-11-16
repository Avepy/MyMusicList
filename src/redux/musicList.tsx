import { createSlice } from '@reduxjs/toolkit';

interface MusicListItems {
    title: string;
    artist: string;
    plays: number;
    rating: number;
}

export const musicListSlice = createSlice({
    name: 'musicList',
    initialState: {
        musicList: [{title: "Example", artist: "Example", plays: 0, rating: 1}] as MusicListItems[],
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
                return item.title !== action.payload.title;
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