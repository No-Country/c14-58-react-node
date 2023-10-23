import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPets = createAsyncThunk("pets/getAll", async () => {
  try {
    const info = await axios.get("http://localhost:3000/pets");
    return info.data;
  } catch (error) {
    console.error(error);
  }
});

const petSlice = createSlice({
  name: "pets",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPets.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPets.rejected, (state, action) => {
      state.list = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default petSlice.reducer;

export { fetchPets };
