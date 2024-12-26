import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";
import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data: weatherInfo, error, isLoading} = useGetWeatherByCityQuery(city, {refetchOnMountOrArgChange: 30});

    if (!city) {
        return <div className={'infoWeath'}>Enter city name</div>
    }

    if (isLoading) {
        return <div className={'infoWeath'}>Pending...</div>
    }

    if (error) {
        return <div className={'infoWeath'}>Enter correct city name</div>
    }

    return (
        <div className={'infoWeath'}>
            {!!weatherInfo &&
                <> {/*это фрагмент Fragment'*/}
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temp: {weatherInfo.temp}</p>
                    <p>Pressure: {weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(weatherInfo.sunset! * 1000).toLocaleTimeString()}</p>
                </>
            }
        </div>
    )
};

export default Weather;