import { configureStore } from "@reduxjs/toolkit";
import musicListReducer from "./musicList";

export default configureStore({
    reducer: {
        musicList: musicListReducer, 
    }
});