import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create initial state
const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    getAllServices: async (state, action) => {
      const res = await axios('http://localhost:5000/api/v1/service');
      const { data } = await res.data;
      return { ...state, services: data };
    },
    createAService: async (state) => {},
    updateService: async (state) => {},
    deleteService: async (state) => {},
  },
});

export const servicesSelect = (state) => state.service.services;

export const { getAllServices, createAService, updateService, deleteService } =
  serviceSlice.actions;
export default serviceSlice.reducer;
