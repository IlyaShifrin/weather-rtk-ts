import {useEffect, useState} from "react";
import {WeatherInfo} from "../utils/types";
import {api_key, base_url} from "../utils/constants.ts";

interface Props {
    city: string;
}

const Weather = ({city}: Props) => {
    const [message, setMessage] = useState('Enter city name');

    const getWeather = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name')
            }
            const data = await response.json();
            setWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            })
            setMessage('');
        } catch (e) {
            if (e instanceof Error) {
                setMessage(e.message);
            }
        }
    }

    useEffect(() => {
        if (city) {
            getWeather(city);
        }
    }, [city]);

    const [weather, setWeather] = useState<WeatherInfo>({});
    return (
        <div className={'infoWeath'}>
            {!message &&
                <> {/*это фрагмент Fragment'*/}
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset! * 1000).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
};

export default Weather;