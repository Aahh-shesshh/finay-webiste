import { createSlice } from '@reduxjs/toolkit'

const initialState = false;
  


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    incrementByOne: (state) => 
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
       state = !state
  
      ,
      decrementByOne: (state) => {
        state.value = 0
      },
  },
},

)

// Action creators are generated for each case reducer function
export const { incrementByOne, decrementByOne} = profileSlice.actions;

export default profileSlice.reducer;