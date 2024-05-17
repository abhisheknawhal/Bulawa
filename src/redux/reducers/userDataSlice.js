import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userDetail: '',
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload ? action.payload : false;
    },
    setuserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setuserDetail,
} = userDataSlice.actions;

export default userDataSlice.reducer;
