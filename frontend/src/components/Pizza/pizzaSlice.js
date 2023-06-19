import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        isLoading: false,
        errorMsg: '',
        data: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getAllPizzaThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllPizzaThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(getAllPizzaThunk.rejected, (state, action) => {
                state.errorMsg = action.payload
            })
    }
})

const getAllPizzaThunk = createAsyncThunk(
    'pizza/getAllPizzaThunk',
    async () => {
        try {
            const res = await axios(`https://thepizzacompany-backend.up.railway.app/api/types`)
            return res.data.find(pizza => pizza.name === 'Pizza').productIds
        } catch (err) {
            return err.message
        }
    }
)

export default pizzaSlice.reducer

export {
    getAllPizzaThunk
}