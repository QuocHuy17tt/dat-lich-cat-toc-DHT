import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../../api/auth-api";
import { RootState } from "../../../app/store";
import { loginInfo, loginState } from "./login-dto";

export const adminLogin = createAsyncThunk(
    'login/loginFunc', async(params:loginInfo, thunkApi) => {
        const response: any = await authApi.login(params);
        console.log(response);
        if (response.statusCode >300) {
            return thunkApi.rejectWithValue(response.message);
        }
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
)


const initialState:loginState = {
    state:'idle',
    msg: '',
    token:'',
    Account:'',
}

export const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<any>) => {
            state.token = '';
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(adminLogin.pending, (state) => {
            state.state ='pending';
        })
        .addCase(adminLogin.rejected, (state, action: PayloadAction<any>) => {
            console.log("in here");
            state.state ='failed';
            state.msg = action.payload;
            window.alert(state.msg);
        })
        .addCase(adminLogin.fulfilled, (state, action: PayloadAction<any>) => {
            state.state = 'idle';
            //get token from data response from server
            state.msg = action.payload.message;
            state.token = action.payload.Token.accessToken;
            state.Account = action.payload.Account;
            window.alert(action.payload.message);
            sessionStorage.setItem("token",action.payload.Token.accessToken);
            localStorage.setItem("Account", action.payload.Account);
        })
    } 
})

export const { reducer, actions } = LoginSlice;
export const { setToken} = actions;
export const selectLoginState = (state: RootState) => state.login;
export default reducer;