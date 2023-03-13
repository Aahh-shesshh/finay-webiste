import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0
};
  


export const counterNextBtnSlice = createSlice({
  name: 'next',
  initialState,
  reducers: {
    increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
  
      },
      decrement: (state) => {
        state.value -= 1
      },
      setZeroNextBtn: (state) => {
        state.value = 0
      },
    

  },
},

)

// Action creators are generated for each case reducer function
export const { increment, decrement,  setZeroNextBtn} = counterNextBtnSlice.actions;

export default counterNextBtnSlice.reducer;