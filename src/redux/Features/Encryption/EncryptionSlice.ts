import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateKey } from "../../../util/aesEncryption";
// Define a type for the slice state
interface EncryptionState {
    keyString: string,
    encString: string,
    isKeyLoading: boolean,
    isKeySuccess: boolean,
    keys: string
}

// Define the initial state using that type
const initialState: EncryptionState = {
    keyString: '',
    encString: '',
    isKeyLoading: false,
    isKeySuccess: false,
    keys: ''
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
        }
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
export const { setKeyText, setEncryptionText } = EncryptionSlice.actions
export default EncryptionSlice.reducer