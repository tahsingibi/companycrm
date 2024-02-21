import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import YearlyIncomeServices from '../../../services/yearlyIncome';

export let mainData = [];
const initialState = {
  yearlyIncome: {
    data: [],
    loading: true,
    author: [],
    sector: [],
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

    filterYearlyIncome: (state, action) => {
      if (!!action.payload) {
        const { key, value } = action.payload;
        const filteredData = mainData.filter((item) => item[key] === value);
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

      let authors = [];
      let sectors = [];

      const stringValues = (val, key) => {
        return !JSON.stringify(val).toLowerCase().includes(key.toLowerCase());
      };

      action.payload.forEach((item) => {
        const authorCheck = stringValues(authors, item.author);
        const sectorCheck = stringValues(sectors, item.sector);

        if (authorCheck) authors.push({ key: item.author, label: item.author });
        if (sectorCheck) sectors.push({ key: item.sector, label: item.sector });
      });

      state.yearlyIncome.author = authors;
      state.yearlyIncome.sector = sectors;
    });
  },
});
