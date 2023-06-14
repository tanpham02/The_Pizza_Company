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
            const res = await axios(`http://localhost:5001/api/types/${1}`)
            const pizzaType = await res.data
            const pizzaData = await axios(`http://localhost:5001/api/products`)
            const result = await pizzaData.data.filter(
                pizza => pizza.typesId === pizzaType.id
            )
            return result
        } catch (err) {
            return err.message
        }
    }
)

export default pizzaSlice.reducer

export {
    getAllPizzaThunk
}