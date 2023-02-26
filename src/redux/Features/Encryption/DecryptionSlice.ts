import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { decryptData } from "../../../util/aesEncryption";
// Define a type for the slice state
interface DecryptionSlice {
    keyString: string,
    cipeherText:string,
    isDeCipherLoading:boolean,
    isDeCipherSuccess:boolean,
    DeCipher:string|undefined
}

// Define the initial state using that type
const initialState: DecryptionSlice = {
    keyString: '',
    cipeherText:'',
   
    isDeCipherLoading:false,
    isDeCipherSuccess:false,
    DeCipher:''
}
export const DecryptionSlice = createSlice({
    name: 'decryption',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setKeyText: (state, action) => {
            state.keyString = action.payload;
        },
        setCipherText: (state, action) => {
            state.cipeherText = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(generateDeCipherThunk.fulfilled, (state, { payload }) => {
            state.isDeCipherLoading = false
            state.isDeCipherSuccess = true
            state.DeCipher = payload.originalText
        })
        builder.addCase(generateDeCipherThunk.rejected, (state, action) => {
            state.isDeCipherLoading = false
            state.isDeCipherSuccess = false
        })
        builder.addCase(generateDeCipherThunk.pending, (state, action) => {
            state.isDeCipherLoading = true
        })
    },
})

/* generate cipher thunk */
export const generateDeCipherThunk = createAsyncThunk('decipher/generate', async (arg:{cipher:any,key:any} , thunkApi) => {
    try {
        const response =  decryptData(arg.cipher,arg.key)
        return response
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }

})
export const { setKeyText,setCipherText } = DecryptionSlice.actions
export default DecryptionSlice.reducer