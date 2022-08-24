import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './states/serviceSlice/serviceSlice';

export default configureStore({
  reducer: {
    service: serviceReducer,
  },
});
