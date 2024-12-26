import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherInfo, WeatherResponse} from "../../utils/types";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    // refetchOnMountOrArgChange: 30,
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            // keepUnusedDataFor: 60*60*5,
            transformResponse: (response: WeatherResponse) => {
                return {
                    country: response.sys.country,
                    city: response.name,
                    temp: response.main.temp,
                    pressure: response.main.pressure,
                    sunset: response.sys.sunset
                };
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi