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
      const { page, limit } = thunkApi.getState().autos;
      const { data } = await autoAxios.get(`/?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoadMoreAutos = createAsyncThunk(
  'autos/apiLoadMoreAutos',
  async (_, thunkApi) => {
    try {
      const { page, limit } = thunkApi.getState().autos;
      const { data } = await autoAxios.get(`/?page=${page}&limit=${limit}`);
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
  page: 1,
  limit: 4,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiGetAutos.fulfilled, (state, action) => {
        state.status = STATUSES.fulfilled;
        state.autos = action.payload;
      })
      .addCase(apiLoadMoreAutos.fulfilled, (state, action) => {
        state.status = STATUSES.fulfilled;
        state.autos = [...state.autos, ...action.payload];
      })
      .addMatcher(
        isAnyOf(apiGetAutos.pending, apiLoadMoreAutos.pending),
        state => {
          state.status = STATUSES.pending;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(apiGetAutos.rejected, apiLoadMoreAutos.rejected),
        (state, action) => {
          state.status = STATUSES.rejected;
          state.error = action.payload;
        }
      );
  },
});

export const { incrementPage } = autosSlice.actions;

export const autosReducer = autosSlice.reducer;
