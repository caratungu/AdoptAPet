import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userAppointments: [],
  services: [
    {
      id: 1,
      name: "Adoptar",
      description: "Quiero a un peludito en mi familia",
      is_active: true
    },
    {
      id: 2,
      name: "Donación",
      description: "Quiero hacer un aporte para que su refugio pueda seguir prestando esa hermosa labor",
      is_active: true
    },
    {
      id: 3,
      name: "Voluntariado",
      description: "Quiero ayudar a que todos los peluditos tengan una mejor vida",
      is_active: true
    },
  ],
};

const adoptapetSlice = createSlice({
  name: "adoptapet",
  initialState,
  reducers: {
    getAllAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    getAllServices: (state, action) => {
      state.services = action.payload;
    },
    userInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  getAllAppointments,
  cancelAppointment,
  getAllServices,
  userInfo,
} = adoptapetSlice.actions;
export default adoptapetSlice.reducer;
