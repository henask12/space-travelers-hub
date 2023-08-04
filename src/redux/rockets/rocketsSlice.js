import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  loading: false,
  performingAction: false,
  error: false,
  success: false,
  message: '',
  rockets: [],
};

// const RESERVE_ROCKET = 'rockets/reserveRocket';

// export const reserveRocket = (rocketId) => ({
//   type: RESERVE_ROCKET,
//   payload: rocketId,
// });

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// Slice

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    RESET_VALUE(state) {
      state.error = false;
      state.success = false;
      state.performingAction = false;
    },
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = true;
      }
    },
    cancelReservation(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = false;
      }
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
      state.performingAction = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.performingAction = false;
      state.rockets = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.performingAction = false;
      state.message = action.payload?.errors[0];
      state.rockets = [];
    });
  },
});

export const { RESET_VALUE, reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
