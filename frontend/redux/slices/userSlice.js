import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const getUserSession = createAsyncThunk(
  "user/getUserSession",

  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/getUserSession");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const Signin = createAsyncThunk(
  "user/Signin",

  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/login", data);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",

  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.put("/auth/logout");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [getUserSession.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserSession.rejected]: (state, action) => {
      console.log("error", action.payload);
      state.loading = false;
    },
    [getUserSession.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    [Signin.rejected]: (state, action) => {
      state.error = action.payload;
      console.log("login error", action.payload);
    },
    [Signin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    [logout.pending]: (state, action) => {},
    [logout.rejected]: (state, action) => {},
    [logout.fulfilled]: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
