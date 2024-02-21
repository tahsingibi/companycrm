import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import YearlyIncomeServices from '../../../services/yearlyIncome';

let mainData = [];
const initialState = {
  yearlyIncome: {
    data: [],
    loading: true,
  },
};

export const fetchYearlyIncome = createAsyncThunk(
  'yearlyIncome/fetchYearlyIncome',
  async () => YearlyIncomeServices.getYearlyIncome()
);

export const { reducer, actions } = createSlice({
  name: 'yearlyIncome',
  initialState,
  reducers: {
    searchInYearlyIncome: (state, action) => {
      const searchTerm = action.payload.toLowerCase();

      if (!!searchTerm) {
        const filteredData = mainData.filter((item) =>
          JSON.stringify(item).toLowerCase().includes(searchTerm)
        );
        state.yearlyIncome.data = filteredData;
        return;
      }

      state.yearlyIncome.data = mainData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchYearlyIncome.fulfilled, (state, action) => {
      state.yearlyIncome.data = action.payload;
      state.yearlyIncome.loading = false;
      mainData = action.payload;
    });
  },
});
