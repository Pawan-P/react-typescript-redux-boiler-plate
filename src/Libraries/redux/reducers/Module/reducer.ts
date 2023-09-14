import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RESTClient from "../../../networking/RESTClient";
import Routes from "../../../networking/routes";

const initialState = {
    pending: false, // for loader
    error: '', //error
    stateData: [], //data
};

export const dispatchFunctionName = createAsyncThunk(
    'dispatchFunctionName',
    async (payload: any, thunkAPI: any) => {
        try
        {
            const client = new RESTClient(Routes.MODULENAME.apiObj);

            const response = await client.call({}, payload); //GET
            // const response = await client.call(payload); //POST
            return response.data;
        }
        catch (error) 
        {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSlice: any = createSlice({
    name: 'somename',
    initialState,
    reducers: {},
    extraReducers: {
        [`${dispatchFunctionName.pending}`]: (state, action) => {
            state.pending = true;
            return state;
          },
          [`${dispatchFunctionName.rejected}`]: (state, action) => {
            state.pending = false;
            state.error = action.error.message;
      
            return state;
          },
          [`${dispatchFunctionName.fulfilled}`]: (state, action) => {
            const { payload } = action;
            state.pending = false;
            let somelist = payload?.data?.somelist || [];
      
            // somelist = somelist.map((v: any) => {
            //   return { v };
            // });
      
            state.stateData = somelist;
      
            return state;
          },
    },
});

export default authSlice.reducer;