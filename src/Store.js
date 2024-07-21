import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slice.js'

let store = configureStore({
    reducer:{
        task:taskReducer
    }
})

export {store}