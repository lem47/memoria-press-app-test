/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async({
    page,
    size,
    search,
    sortBy,
    sortDir,
  }) => {
    const response = await fetch(
      // eslint-disable-next-line max-len
      `https://test-task-j.herokuapp.com/data?page=${page}&size=${size}&search=${search}&sortBy=${sortBy}&sortDir=${sortDir}`,
    );

    const data = await response.json();

    return data;
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    page: 1,
    size: 10,
    search: '',
    sortBy: '',
    sortDir: -1,
  },
  reducers: {
    changePage(state, { payload }) {
      state.page = payload;
    },
    changeSize(state, { payload }) {
      state.size = payload;
    },
    changeSearch(state, { payload }) {
      state.search = payload;
    },
    changeSortBy(state, { payload }) {
      state.sortBy = payload;
    },
    changeSortDir(state, { payload }) {
      state.sortDir = payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  changePage,
  changeSize,
  changeSearch,
  changeSortBy,
  changeSortDir,
} = dataSlice.actions;
export default dataSlice.reducer;
