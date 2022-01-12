import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { blogApi } from "../../../api/blog-api";
import { RootState } from "../../../app/store";
import { blogInfoRequest, blogState } from "./blog-dto";

const initialState:blogState = {
    state:'idle',
    msg: '',
    listBlog: [],
    blog: {
        blog_id:0,
        name: '',
        description: '',
        content: '',
        comments: []
    }
}

// export const updateBlogStatus = createAsyncThunk(
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

export const updateBlog = createAsyncThunk(
    'blog/updateBlog', async(params:blogInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image_blogs", params.image_blogs);
        data.append("description", params.description);
        data.append("content", params.content);
        data.append("blog_id", `${params.blog_id}`);
        const response: any = await blogApi.updateBlog(params.blog_id, data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const getBlog = createAsyncThunk(
    'blog/getBlog', async(params, thunkApi) => {
        const response: any = await blogApi.getBlog();
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const deleteBlog = createAsyncThunk(
    'blog/deleteBlog', async(params:any, thunkApi) => {
        const response: any = await blogApi.deleteBlog(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const createNewBlog = createAsyncThunk(
    'blog/createNewBlog', async(params:blogInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("name", params.name);
        data.append("image_blogs", params.image_blogs);
        data.append("description", params.description);
        data.append("content", params.content);
        data.append("blog_id", `${params.blog_id}`);
        const response: any = await blogApi.createBlog(data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const BlogSlice = createSlice({
    name:'blog',
    initialState,
    reducers: {
        setBlog: (state, action: PayloadAction<any>) => {
            state.blog = action.payload;
            console.log(state.blog);
            
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(getBlog.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getBlog.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listBlog = action.payload.data.rows;
        })
        .addCase(deleteBlog.pending, (state) => {
            state.state ='pending';
        })
        .addCase(deleteBlog.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(deleteBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.location.reload();
        })
        .addCase(createNewBlog.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createNewBlog.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(createNewBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
        .addCase(updateBlog.pending, (state) => {
            state.state ='pending';
        })
        .addCase(updateBlog.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(updateBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
    } 
})

export const { reducer, actions } = BlogSlice;
export const { setBlog } = actions;
export const selectBlogState = (state: RootState) => state.blog;
export default reducer;