import {createSlice} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";

const initialState: WeatherInfo = {};

const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: initialState,
    reducers: {
        putWeatherInfo: (_state, action) => action.payload
    }
})

export const {putWeatherInfo} = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;