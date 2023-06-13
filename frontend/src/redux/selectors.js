import { createSelector } from '@reduxjs/toolkit'

const storesSystem = state => state.storesSystem.datas
const storesSystemFiltersByName = state => state.storesSystem.filters.name

const storesSystemSelectors = createSelector(
    storesSystem,
    storesSystemFiltersByName,
    (storesSystemState, filterByName) => (
        storesSystemState.filter(address =>
            address.name.toLowerCase().includes(filterByName.toLowerCase())
        )
    )

)

export { storesSystemSelectors }