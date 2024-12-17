import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {WeatherInfo} from "../../utils/types";

export const fetchWeatherInfo = createAsyncThunk(
    'fetch/weatherInfo',
    async (city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        const res: WeatherInfo = {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        }

        return res;
    }
)

// export const fetchWeatherInfo = (city: string) => {
//     return (dispatch: AppDispatch) => {
//         dispatch(putMessage('Pending...'));
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`, {})
//             .then(result => result.json())
//             .then(data => {
//                 dispatch(putWeatherInfo({
//                     country: data.sys.country,
//                     city: data.name,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure,
//                     sunset: data.sys.sunset
//                 }))
//                 dispatch(putMessage(''));
//             })
//             .catch(e => {
//                 console.log(e);
//                 dispatch(putMessage('Enter correct city name'));
//             })
//     }
// }