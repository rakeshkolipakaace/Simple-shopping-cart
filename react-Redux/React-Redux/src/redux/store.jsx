import { configureStore } from "@reduxjs/toolkit";
import postslice from "./postSlice";

const store = configureStore({
    reducer: {
        posts: postslice
    }
});

export default store;
