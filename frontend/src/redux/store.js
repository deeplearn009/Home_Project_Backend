import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './reducers/cardSlice'
import basketSlice from './reducers/basketSlice'
import wishSlice from './reducers/wishSlice'

export const store = configureStore({
    reducer: {
        cards: cardSlice,
        basket: basketSlice, 
        wish: wishSlice
    }
})