import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accountApi } from "../../../api/account-api";
import { RootState } from "../../../app/store";
import { accountInfoRequest, accountState } from "./account-dto";

const initialState:accountState = {
    state:'idle',
    msg: '',
    listAccount: [],
    account: {
        user_id: 0,
        username: "",
        fullname: "",
        email: "",
        phone: "",
        address: "",
        avatar: "",
        role: "",
        password: "",
    }
}

// export const updateAccountStatus = createAsyncThunk(
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

export const updateAccount = createAsyncThunk(
    'account/updateAccount', async(params:accountInfoRequest, thunkApi) => {
        console.log(params);
        const data = new FormData();
        data.append("user_id", `${params.user_id}`);
        data.append("username", params.username);
        data.append("avatar", params.avatar);
        data.append("address", params.address);
        data.append("fullname", params.fullname);
        data.append("email", params.email);
        data.append("phone", params.phone);
        data.append("role", params.role);
        if(params.password !== '') {
            data.append("password", params.password);
        }
        const response: any = await accountApi.updateAccount(params.user_id, data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const getAccount = createAsyncThunk(
    'account/getAccount', async(params, thunkApi) => {
        const response: any = await accountApi.getAccount();
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const deleteAccount = createAsyncThunk(
    'account/deleteAccount', async(params:any, thunkApi) => {
        const response: any = await accountApi.deleteAccount(params);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)

export const createNewAccount = createAsyncThunk(
    'account/createNewAccount', async(params:accountInfoRequest, thunkApi) => {
        const data = new FormData();
        data.append("user_id", `${params.user_id}`);
        data.append("username", params.username);
        data.append("fullname", params.fullname);
        data.append("email", params.email);
        data.append("phone", params.phone);
        data.append("address", params.address);
        data.append("avatar", params.avatar);
        data.append("password", params.password);
        data.append("role", params.role);
        
        const response: any = await accountApi.createAccount(data);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


export const AccountSlice = createSlice({
    name:'account',
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<any>) => {
            state.account = action.payload;
        },
        setAccountPassword: (state) => {
            state.account.password = "";
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getAccount.pending, (state) => {
            state.state ='pending';
        })
        .addCase(getAccount.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(getAccount.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.listAccount = action.payload.data.rows;
        })
        .addCase(deleteAccount.pending, (state) => {
            state.state ='pending';
        })
        .addCase(deleteAccount.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(deleteAccount.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.location.reload();
        })
        .addCase(createNewAccount.pending, (state) => {
            state.state ='pending';
        })
        .addCase(createNewAccount.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
        })
        .addCase(createNewAccount.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
        .addCase(updateAccount.pending, (state) => {
            state.state ='pending';
        })
        .addCase(updateAccount.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(updateAccount.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            window.alert(state.msg);
            window.location.reload();
        })
    } 
})

export const { reducer, actions } = AccountSlice;
export const { setAccount, setAccountPassword } = actions;
export const selectAccountState = (state: RootState) => state.account;
export default reducer;