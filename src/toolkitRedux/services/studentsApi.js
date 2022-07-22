import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const page = 1;
const size = 10;

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async() => {
    const response = await fetch(
      `https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`,
    );

    const data = await response.json();

    return data;
  },
);

const toolkitSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    });
  },
});

export default toolkitSlice.reducer;
