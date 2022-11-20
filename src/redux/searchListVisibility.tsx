import { createSlice } from "@reduxjs/toolkit";

export const searchListVisibilitySlice = createSlice({
    name: "searchListVisibility",
    initialState: {
        searchListVisibility: false,
    },
    reducers: {
        setSearchListVisibility: (state, action) => {
            return {
                ...state,
                searchListVisibility: action.payload,
            };
        }
    }
});

export const { setSearchListVisibility } = searchListVisibilitySlice.actions;

export default searchListVisibilitySlice.reducer;