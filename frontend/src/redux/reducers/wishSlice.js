import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishThunk = createAsyncThunk('/wishlist/get', async () => {
    const res = await axios.get('http://localhost:5000/wishlist/')
    return res.data
}) 

export const postWishThunk = createAsyncThunk('/wishlist/post', async (data) => {
    await axios.post('http://localhost:5000/wishlist/', data)
    return data
})

export const deleteWishThunk = createAsyncThunk('/wishlist/delete', async (id) => {
    await axios.delete(`http://localhost:5000/wishlist/${id}`)
    return id
})

const wishSlice = createSlice({
    name: "wish",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        //For get

        .addCase(getWishThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getWishThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wish = action.payload
        })
        .addCase(getWishThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        // For post
        
        .addCase(postWishThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wish.push(action.payload)
        })

        // For delete

        .addCase(deleteWishThunk.fulfilled, (state, action) => {
            state.loading =false
            state.wish = state.wish.filter(item => item._id !== action.payload)
        })

    }
})

export default wishSlice.reducer