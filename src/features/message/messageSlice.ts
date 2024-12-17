import {createSlice} from "@reduxjs/toolkit";
import {fetchWeatherInfo} from "../api/weatherInfoAction.ts";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherInfo.pending, () => 'Pending...')
            .addCase(fetchWeatherInfo.fulfilled, () => '')
            .addCase(fetchWeatherInfo.rejected, () => 'Enter correct city name')
    }
})

export default messageSlice.reducer;