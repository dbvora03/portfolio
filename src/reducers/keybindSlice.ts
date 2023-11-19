import { keys } from '@/utils/keys'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  keys: keys.reduce((map, character) => ({ ...map, [character]: null }), {})
}

export const keybindSlice = createSlice({
  name: 'keybind',
  initialState,
  reducers: {
    setKey: (state: any, action: PayloadAction<any>) => {

      const currentLetter = (Object.keys(state.keys).find(key => state.keys[key]?.filePath === action.payload.value.filePath));

      if (currentLetter) state.keys[currentLetter] = null

      let audio = new Audio(action.payload.value.filePath);
      audio.load()
      state.keys[action.payload.letter] = {...action.payload.value, audio: audio}
    }
  }
})

// Action creators are generated for each case reducer function
export const { setKey } = keybindSlice.actions

export default keybindSlice.reducer