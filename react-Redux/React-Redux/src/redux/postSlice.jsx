import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 1,
        title: "Post 1",
        content: "Content 1"
    },
    {
        id: 2,
        title: "Post 2",
        content: "Content 2"
    },
    {
        id: 3,
        title: "Post 3",
        content: "Content 3"
    },
    {
        id: 4,
        title: "Post 4",
        content: "Content 4"
    }
]

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {    }
})

export default postSlice.reducer