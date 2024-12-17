import {createSlice} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";
import {fetchWeatherInfo} from "../api/weatherInfoAction.ts";

const initialState: WeatherInfo = {};

const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherInfo.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeatherInfo.rejected, () => {console.log('The request was rejected!')})
    }
})

export default weatherInfoSlice.reducer;