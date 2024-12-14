import {api_key, base_url} from "../../utils/constants.ts";
import {putMessage} from "../message/messageSlice.ts";
import {putWeatherInfo} from "../weatherInfo/weatherInfoSlice.ts";
import {AppDispatch} from "../../app/store.ts";

export const fetchWeatherInfo = (city: string) => {
    return (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`, {})
            .then(result => result.json())
            .then(data => {
                dispatch(putWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }))
                dispatch(putMessage(''));
            })
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
    }
}