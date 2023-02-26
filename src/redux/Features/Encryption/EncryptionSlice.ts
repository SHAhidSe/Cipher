import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { encryptData, generateKey } from "../../../util/aesEncryption";
// Define a type for the slice state
interface EncryptionState {
    keyString: string,
    encString: string,
    isKeyLoading: boolean,
    isKeySuccess: boolean,
    keys: string,
    isCipherLoading:boolean,
    isCipherSuccess:boolean,
    Cipher:string|undefined
}

// Define the initial state using that type
const initialState: EncryptionState = {
    keyString: '',
    encString: '',
    isKeyLoading: false,
    isKeySuccess: false,
    keys: '',
    isCipherLoading:false,
    isCipherSuccess:false,
    Cipher:''
}
export const EncryptionSlice = createSlice({
    name: 'encryption',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setKeyText: (state, action) => {
            state.keyString = action.payload;
        },
        setEncryptionText: (state, action) => {
            state.encString = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(generateKeyThunk.fulfilled, (state, { payload }) => {
            state.isKeyLoading = false
            state.isKeySuccess = true
            state.keys = payload
        })
        builder.addCase(generateKeyThunk.rejected, (state, action) => {
            state.isKeyLoading = false
            state.isKeySuccess = false
        })
        builder.addCase(generateKeyThunk.pending, (state, action) => {
            state.isKeyLoading = true
        })
        builder.addCase(generateCipherThunk.fulfilled, (state, { payload }) => {
            state.isCipherLoading = false
            state.isCipherSuccess = true
            state.Cipher = payload.ciphertext
        })
        builder.addCase(generateCipherThunk.rejected, (state, action) => {
            state.isCipherLoading = false
            state.isCipherSuccess = false
        })
        builder.addCase(generateCipherThunk.pending, (state, action) => {
            state.isCipherLoading = true
        })
    },
})
export const generateKeyThunk = createAsyncThunk('key/generate', async (arg: { password: string, salt: string, cost: number, length: number }, thunkApi) => {
    try {
        const response = await generateKey(arg.password, arg.salt, arg.cost, arg.length)
        console.log(response)
        return 'response' as string
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }

})

/* generate cipher thunk */
export const generateCipherThunk = createAsyncThunk('cipher/generate', async (arg:{key:string,text:string} , thunkApi) => {
    try {
        const response =  encryptData(arg.key,arg.text)
       
        return response
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }

})
export const { setKeyText, setEncryptionText } = EncryptionSlice.actions
export default EncryptionSlice.reducer