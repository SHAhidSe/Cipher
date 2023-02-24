import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SplashState {
  isLoading: boolean
}

// Define the initial state using that type
const initialState: SplashState = {
  isLoading: true,
}

export const splashSlice = createSlice({
  name: 'splash',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.isLoading =false
    },
   
  },
})

export const { toggle } = splashSlice.actions
export default splashSlice.reducer