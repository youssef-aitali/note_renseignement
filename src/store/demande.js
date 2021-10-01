import { createSlice } from "@reduxjs/toolkit";

const demandeSlice = createSlice({
    name: 'demande',
    initialState: {},
    reducers: {
      ajoutInfoDemandeur: (state, action) => {
        state['ajoutInfoDemandeur'] = action.payload.infoDemandeur;
      },
      ajoutParcelles: (state, action) => {
        state['ajoutParcelles'] = action.payload.parcelles
      },
    }
});

export const { ajoutInfoDemandeur, ajoutParcelles } = demandeSlice.actions;
export default demandeSlice.reducer;