import { createSlice } from "@reduxjs/toolkit";

const PROPERTYCARD = "PropertyCard";
const initialState = {
  data: "car car",
};
const myHeaders = {
  "Content-Type": "application/json",
  Authorization: "your-token",
  "Type ": "API Key",
  Key: "x-api-key",
  Value: "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
};
export const upload = () => {
  fetch(
    "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data",
    {
      credentials: "include",
      Authorization: 'authorization string',
      headers: {  
        Type: 'API Key',
        Key: 'x-api-key',
      Value: 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59',
      
      },  
    }
  );
};

export const cardSlice = createSlice({
  name: PROPERTYCARD,
  initialState,
  reducers: {
    setData(state, action) {
      upload();
    },
  },
});
export const selectData = (state) => state[PROPERTYCARD];
export const { setData } = cardSlice.actions;
export default cardSlice.reducer;
