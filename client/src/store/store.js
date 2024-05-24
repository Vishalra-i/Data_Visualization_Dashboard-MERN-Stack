import {configureStore} from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice'
import dataSlice from './dataSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        server : dataSlice
    },
})