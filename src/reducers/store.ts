import { configureStore } from '@reduxjs/toolkit'
import keybindSlice from './keybindSlice'

export const store = configureStore({
  reducer: {
    keybind: keybindSlice,
  },
})