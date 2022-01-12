import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cateApi } from "../../../api/cate-api";
import { RootState } from "../../../app/store";
import { cateState } from "./cate-dto";

const initialState:cateState = {
    state:'idle',
    msg: '',
    categories: []
}

// export const updateServiceStatus = createAsyncThunk(
//     'booking/updateStatusBooking', async(params:updateStatusBooking, thunkApi) => {
//         console.log(params);
//         const response: any = await bookingApi.updateStatus(params);
//         console.log(response);
//         if (response.statusCode >300) {
//             return thunkApi.rejectWithValue(response.message);
//         }
//     //   The value we return becomes the `fulfilled` action payload
//       return response;
//     }
// )

export const getAllCate = createAsyncThunk(
    'category/getCate', async(params, thunkApi) => {
        const response: any = await cateApi.getCate();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

// export const createNewService = createAsyncThunk(
//     'service/createNewService', async(params:serviceInfoRequest, thunkApi) => {
//         const response: any = await serviceApi.getService();
//         if (response.statusCode >300) {
//             return thunkApi.rejectWithValue(response.message);
//         }
//       // The value we return becomes the `fulfilled` action payload
//       return response;
//     }
// )


export const cateSlice = createSlice({
    name:'category',
    initialState,
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAllCate.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getAllCate.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getAllCate.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.categories = action.payload.data;
            
        })
        // .addCase(updateServiceStatus.pending, (state) => {
        //     state.state ='pending';
        // })
        // .addCase(updateServiceStatus.rejected, (state, action: PayloadAction<any>) => {
        //     console.log("in here");
        //     state.state ='failed';
        //     state.msg = action.payload;
        // })
        // .addCase(updateServiceStatus.fulfilled, (state, action: PayloadAction<any>) => {
        //     state.state = 'idle';
        //     //get token from data response from server
        //     state.msg = action.payload.message;
        // })
        // .addCase(createNewService.pending, (state) => {
        //     state.state ='pending';
        // })
        // .addCase(createNewService.rejected, (state, action: PayloadAction<any>) => {
        //     console.log("in here");
        //     state.state ='failed';
        //     state.msg = action.payload;
        // })
        // .addCase(createNewService.fulfilled, (state, action: PayloadAction<any>) => {
        //     state.state = 'idle';
        //     //get token from data response from server
        //     state.msg = action.payload.message;
        // })
    } 
})

export const { reducer, actions } = cateSlice;
// export const { setToken} = actions;
export const selectCateState = (state: RootState) => state.category;
export default reducer;