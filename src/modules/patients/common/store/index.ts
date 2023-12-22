import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'modules/main/store';
import { INITIAL_STATE_STORE_PATIENTS } from 'modules/patients/patient/data';
import { IPatient } from 'modules/patients/patient/entity';

export const slice = createSlice({
  name: 'patientsModuleStore',
  initialState: INITIAL_STATE_STORE_PATIENTS,
  reducers: {
    setPatientDetail: (_state, action: PayloadAction<IPatient>) => {
      _state.patientDetail = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setPatientDetail } = actions;

export const patientsModuleSelector = (state: RootState) =>
  state.patientsModuleStore;

export default reducer;
