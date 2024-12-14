import {createSlice} from "@reduxjs/toolkit";

const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: {
        country: '',
        city: '',
        temp: '',
        pressure: '',
        sunset: 0
    },
    reducers: {
        putWeatherInfo: (_state, action) => action.payload
    }
})

export const {putWeatherInfo} = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;