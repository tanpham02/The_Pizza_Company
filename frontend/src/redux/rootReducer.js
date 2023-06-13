import { combineReducers } from '@reduxjs/toolkit'
import storesSystemSlice from '../components/StoresSystem/storesSystemSlice'

const rootReducer = combineReducers({
    storesSystem: storesSystemSlice
})

export default rootReducer