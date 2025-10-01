import { createSlice } from "@reduxjs/toolkit"


// const initialState = [
//     {
//         id: 1,
//         title: "Post 1",
//         content: "Content 1"
//     },
//     {
//         id: 2,
//         title: "Post 2",
//         content: "Content 2"
//     },
//     {
//         id: 3,
//         title: "Post 3",
//         content: "Content 3"
//     },
//     {
//         id: 4,
//         title: "Post 4",
//         content: "Content 4"
//     }
// ]

// const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {    }
// })

// export default postSlice.reducer


const initialState=[{
    id:1,
    title:'HTML',
    content:'HTML is a markup language'
},
{
    id:2,
    title:'CSS',
    content:'CSS is a styling language'
},
{
    id:3,
    title:'JavaScript',
    content:'JavaScript is a programming language'
},
{
    id:4,
    title:'React',
    content:'React is a library for building user interfaces'
}
]

const postslice=createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.push(action.payload);
        }

    }
})
export const {addPost}=postslice.actions;
export default postslice.reducer