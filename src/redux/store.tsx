import { configureStore } from "@reduxjs/toolkit";
import musicListReducer from "./musicList";
import searchListVisibilityReducer from "./searchListVisibility";

export default configureStore({
    reducer: {
        musicList: musicListReducer, 
        searchListVisibility: searchListVisibilityReducer,
    }
});