import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/auth/login/loginSlice';
import bookingReducer from '../features/pages/homePage/bookingView/bookingSlice';
import registerReducer from '../features/auth/signin/signinSlice';
import serviceReducer from '../features/pages/service/serviceSlice';
import cateReducer from '../features/pages/categories/categoriesSlice';
import galleryReducer from '../features/pages/gallery/gallerySlice';
import blogReducer from '../features/pages/blog/blogSlice';
import accountReducer from '../features/pages/user/accountSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    booking: bookingReducer,
    signin: registerReducer,
    service: serviceReducer,
    category: cateReducer,
    gallery: galleryReducer,
    blog: blogReducer,
    account: accountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
