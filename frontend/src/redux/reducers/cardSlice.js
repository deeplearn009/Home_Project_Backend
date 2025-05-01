import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCardsThunk = createAsyncThunk('/books/get', async () => {
    const res = await axios.get('http://localhost:5000/books/')
    return res.data
})

const cardSlice = createSlice({
    name: 'cards',
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        .addCase(getCardsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getCardsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.cards = action.payload
        })
        .addCase(getCardsThunk.rejected, (state, action) => {
            state.loading = false
            state.cards = action.error.message
        })
    }
})

export default cardSlice.reducer