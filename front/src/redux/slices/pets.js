import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GATEWAY } from "../../assets/globals";
import { useNavigate } from "react-router-dom";

const fetchPets = createAsyncThunk("pets/getAll", async () => {
  try {
    const info = await axios.get(GATEWAY + "/pets");
    return info.data;
  } catch (error) {
    console.error(error);
  }
});

export const postPet = createAsyncThunk(
  "pets/postPet",
  async (petCredentials, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const cleanedToken = token.replace(/^"(.*)"$/, "$1");

      const config = {
        method: "post",
        url: GATEWAY + "/pets",
        headers: {
          Authorization: `Bearer ${cleanedToken}`,
          "Content-Type": "application/json",
        },
        data: petCredentials,
      };
      const response = await axios(config);
      if (response.data.msg) {
        const navigate = useNavigate();
        alert(response.data.msg);
        navigate("/post");
        return false;
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const petSlice = createSlice({
  name: "pets",
  initialState: {
    list: [],
    loading: false,
    created: false,
    error: null,
    detail: {},
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
    builder.addCase(postPet.fulfilled, (state) => {
      state.created = true;
    });
    builder.addCase(postPet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postPet.rejected, (state, action) => {
      state.list = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default petSlice.reducer;

export { fetchPets };
