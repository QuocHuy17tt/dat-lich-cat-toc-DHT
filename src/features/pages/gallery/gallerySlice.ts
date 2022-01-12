import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { galleryApi } from "../../../api/gallery-api";
import { RootState } from "../../../app/store";
import { galleryInfoRequest, galleryState } from "./gallery-dto";

const initialState:galleryState = {
    state:'idle',
    msg: '',
    listGallery: [],
    gallery: {
        gallery_id:0,
        name: '',
        description: '',
        cate_id: '',
    }
}

// export const updateGalleryStatus = createAsyncThunk(
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

export const updateGallery = createAsyncThunk(
    'gallery/updateGallery', async(params:galleryInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image", params.image);
        data.append("description", params.description);
        data.append("cate_id", params.cate_id);
        data.append("gallery_id", `${params.gallery_id}`);
        const response: any = await galleryApi.updateGallery(params.gallery_id, data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const getGallery = createAsyncThunk(
    'gallery/getGallery', async(params, thunkApi) => {
        const response: any = await galleryApi.getGallery();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const deleteGallery = createAsyncThunk(
    'gallery/deleteGallery', async(params:any, thunkApi) => {
        const response: any = await galleryApi.deleteGallery(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const createNewGallery = createAsyncThunk(
    'gallery/createNewGallery', async(params:galleryInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image", params.image);
        data.append("description", params.description);
        data.append("cate_id", params.cate_id);
        data.append("gallery_id", `${params.gallery_id}`);
        const response: any = await galleryApi.createGallery(data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const GallerySlice = createSlice({
    name:'gallery',
    initialState,
    reducers: {
        setGallery: (state, action: PayloadAction<any>) => {
            state.gallery = action.payload;
            console.log(state.gallery);
            
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(getGallery.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getGallery.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getGallery.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listGallery = action.payload.data.rows;
        })
        .addCase(deleteGallery.pending, (state) => {
            state.state ='pending';
        })
        .addCase(deleteGallery.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(deleteGallery.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.location.reload();
        })
        .addCase(createNewGallery.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createNewGallery.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(createNewGallery.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
        .addCase(updateGallery.pending, (state) => {
            state.state ='pending';
        })
        .addCase(updateGallery.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(updateGallery.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
    } 
})

export const { reducer, actions } = GallerySlice;
export const { setGallery } = actions;
export const selectGalleryState = (state: RootState) => state.gallery;
export default reducer;