import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: '',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload
    },
  },
})

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer
