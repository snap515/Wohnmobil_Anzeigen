import axios from 'axios';
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { STATUSES } from 'constants/constants';
export const autoAxios = axios.create({
  baseURL: 'https://6635459b9bb0df2359a44d2b.mockapi.io/advert',
});

export const apiGetAutos = createAsyncThunk(
  'autos/apiGetAutos',
  async (_, thunkApi) => {
    try {
      const { data } = await autoAxios.get('/');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  autos: null,
  status: STATUSES.idle,
  error: null,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {}, // If you have reducers, they should be defined here
  extraReducers: builder => {
    builder
      .addCase(apiGetAutos.fulfilled, (state, action) => {
        state.status = STATUSES.fulfilled;
        state.autos = action.payload;
      })
      .addMatcher(isAnyOf(apiGetAutos.pending), state => {
        state.status = STATUSES.pending;
        state.error = null;
      })
      .addMatcher(isAnyOf(apiGetAutos.rejected), (state, action) => {
        state.status = STATUSES.rejected;
        state.error = action.payload;
      }); // Removed the extra closing brace and corrected the syntax
  },
});

export const autosReducer = autosSlice.reducer;
