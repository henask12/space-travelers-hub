import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  performingAction: false,
  error: false,
  success: false,
  message: '',
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// Slice

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    RESET_VALUE(state) {
      state.error = false;
      state.success = false;
      state.performingAction = false;
    },
    bookMission(
      state, action,
    ) {
      const missionId = action.payload;
      const currentMission = state.missions.find(
        (getMission) => getMission.mission_id === missionId,
      );
      if (currentMission) {
        currentMission.member = true;
      }
    },
    cancelMission(
      state, action,
    ) {
      const missionId = action.payload;
      const currentMission = state.missions.find(
        (getMission) => getMission.mission_id === missionId,
      );
      if (currentMission) {
        currentMission.member = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
      state.performingAction = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.performingAction = false;
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.performingAction = false;
      state.message = action.payload?.errors[0];
      state.missions = [];
    });
  },
});

export const { RESET_VALUE, bookMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
