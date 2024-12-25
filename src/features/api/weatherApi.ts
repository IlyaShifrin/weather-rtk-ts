import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api_key, base_url} from "../../utils/constants.ts";
import {WeatherInfo, WeatherResponse} from "../../utils/types";

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    reducerPath: 'weatherApi',
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: (city: string) => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: 60*60*5,
            transformResponse: (response: WeatherResponse) => {
                return {weatherInfo:
                    response.name,
                    ...response.sys,
                    ...response.main,
                };
            }
        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi