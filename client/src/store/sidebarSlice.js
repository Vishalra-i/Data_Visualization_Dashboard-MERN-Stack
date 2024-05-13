import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    open : false
}



const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState ,
    reducers : {
        openSidebar : (state , action) => {
            state.open = true
        },
        closeSidebar : (state , action) => {
            state.open = false
        }
    }
})

export const {openSidebar , closeSidebar} = sidebarSlice.actions

export default sidebarSlice.reducer