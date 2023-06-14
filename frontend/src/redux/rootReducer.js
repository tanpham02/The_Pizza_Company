import { combineReducers } from '@reduxjs/toolkit'
import storesSystemSlice from '../components/StoresSystem/storesSystemSlice'
import pizzaSlice from '../components/Pizza/pizzaSlice'

const rootReducer = combineReducers({
    storesSystem: storesSystemSlice,
    pizza: pizzaSlice
})

export default rootReducer