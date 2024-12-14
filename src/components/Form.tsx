import React, {useState} from "react";
import {fetchWeatherInfo} from "../features/api/weatherInfoAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeatherInfo(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;