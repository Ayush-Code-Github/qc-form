import {createSlice} from '@reduxjs/toolkit';

export const inspectionSlice = createSlice({
    name: 'inspection',
    initialState:{
        currentFormData: {},
        previousFormData: {},
    },

    reducers:{

        setFormData: (state, action) =>{
            state.previousFormData = {...state.currentFormData}; 
            state.currentFormData = action.payload;
        },
    },
})

export const {setFormData}= inspectionSlice.actions;

export default inspectionSlice.reducer;