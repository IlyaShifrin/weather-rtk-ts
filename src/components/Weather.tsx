import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const weatherInfo = useAppSelector(state => state.weatherInfo);
    const message = useAppSelector(state => state.message);
    return (
        <div className={'infoWeath'}>
            {!message &&
                <> {/*это фрагмент Fragment'*/}
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temp: {weatherInfo.temp}</p>
                    <p>Pressure: {weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(weatherInfo.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
};

export default Weather;