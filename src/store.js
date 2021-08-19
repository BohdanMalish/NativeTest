import { configureStore } from '@reduxjs/toolkit';

import propertyCardReducer from './Redux/Data.slices';

const PROPERTYCARD="PropertyCard";


const store = configureStore({
  reducer: {
    [PROPERTYCARD]: propertyCardReducer,
  },
});

export { store };
