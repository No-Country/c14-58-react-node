import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const loginUser = createAsyncThunk('user/loginUser',
async (userCredentials, { rejectWithValue })=>{
  try {
    const request = await axios.post("http://localhost:3000/users/signin", userCredentials)
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response))
    localStorage.setItem('token', JSON.stringify(response.token))
    return response
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
})

export const createUser = createAsyncThunk('user/createUser',
async (userCredentials, { rejectWithValue })=>{
  try {
    const request = await axios.post("http://localhost:3000/users/signup", userCredentials)
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response))
    localStorage.setItem('token', JSON.stringify(response.token))
    return response
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
})

export const getUser = createAsyncThunk('user/getUser',
async (_, { rejectWithValue })=>{
  try {
    const token = localStorage.getItem('token')
    const cleanedToken = token.replace(/^"(.*)"$/, '$1');
    const config = {
      method: "get",
      url: "http://localhost:3000/users/find",
      headers: {
        Authorization: `Bearer ${cleanedToken}`,
      },
    };
    const response = await axios(config);
    if (response.status !== 200) {
      const errorMessage = response.data.message;

      return rejectWithValue(errorMessage);

    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  reducers: {
    logoutUser: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    }
  },
  extraReducers:(builder) =>{
    builder
      .addCase(getUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
    builder
      .addCase(getUser.pending,(state)=>{
        state.loading = true;
        state.user = null;
        state.error = null;
      })
    builder
      .addCase(getUser.rejected,(state,action)=>{
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
    builder
      .addCase(loginUser.pending,(state)=>{
        state.loading = true;
        state.user = null;
        state.error = null;
      })
    builder
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
    builder
      .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false;
        state.user = null;
        state.error = action.payload
      })
    builder
      .addCase(createUser.pending,(state)=>{
        state.loading = true;
        state.user = null;
        state.error = null;
      })
    builder
      .addCase(createUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
    builder
      .addCase(createUser.rejected,(state,action)=>{
        state.loading = false;
        state.user = null;
        state.error = action.payload
      })
  }
})

export const {logoutUser} = userSlice.actions

export default userSlice.reducer