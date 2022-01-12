import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceApi } from "../../../api/service-api";
import { RootState } from "../../../app/store";
import { serviceInfoRequest, serviceState } from "./service-dto";

const initialState:serviceState = {
    state:'idle',
    msg: '',
    listService: [],
    service: {
        service_id:0,
        name: '',
        price: '',
        description: '',
        cate_id: '',
    }
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

export const getService = createAsyncThunk(
    'service/getService', async(params, thunkApi) => {
        const response: any = await serviceApi.getService();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const deleteService = createAsyncThunk(
    'service/deleteService', async(params:any, thunkApi) => {
        const response: any = await serviceApi.deleteService(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const createNewService = createAsyncThunk(
    'service/createNewService', async(params:serviceInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image", params.image);
        data.append("price", params.price);
        data.append("description", params.description);
        data.append("cate_id", params.cate_id);
        data.append("service_id", `${params.service_id}`);
        const response: any = await serviceApi.createService(data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const updateService = createAsyncThunk(
    'service/updateService', async(params:serviceInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image", params.image);
        data.append("price", params.price);
        data.append("description", params.description);
        data.append("cate_id", params.cate_id);
        data.append("service_id", `${params.service_id}`);
        const response: any = await serviceApi.updateService(params.service_id, data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)



export const ServiceSlice = createSlice({
    name:'service',
    initialState,
    reducers: {
        setService: (state, action: PayloadAction<any>) => {
            state.service = action.payload;
            console.log(state.service);
            
        },

    },
    extraReducers:(builder) => {
        builder
        .addCase(getService.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getService.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getService.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listService = action.payload.data;
        })
        .addCase(deleteService.pending, (state) => {
            state.state ='pending';
        })
        .addCase(deleteService.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(deleteService.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.location.reload();
        })
        .addCase(createNewService.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createNewService.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(createNewService.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
        .addCase(updateService.pending, (state) => {
            state.state ='pending';
        })
        .addCase(updateService.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(updateService.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
    } 
})

export const { reducer, actions } = ServiceSlice;
export const { setService } = actions;
export const selectServiceState = (state: RootState) => state.service;
export default reducer;