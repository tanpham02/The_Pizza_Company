import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const storesSystemSlice = createSlice({
    name: 'storesSystem',
    initialState: {
        isLoading: false,
        errorMsg: '',
        datas: [],
        filters: {
            name: ''
        }
    },
    reducers: {
        filterByName: (state, action) => {
            state.filters.name = action.payload
        }

    },
    extraReducers: builder => {
        builder
            .addCase(getAllStoresSystemThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllStoresSystemThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.datas = action.payload
            })
            .addCase(getAllStoresSystemThunk.rejected, (state, action) => {
                state.errorMsg = action.payload
            })
    }
})

const getAllStoresSystemThunk = createAsyncThunk(
    'storesSystem/getAllStoresSystemThunk',
    async () => {
        try {
            const res = await axios('http://localhost:5001/api/storesSystem')
            const output = await res.data
            return output
        } catch (err) {
            return err.message
        }
    }
)





export default storesSystemSlice.reducer
export {
    getAllStoresSystemThunk,
}

export const {
    filterByName
} = storesSystemSlice.actions




