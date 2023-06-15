import { ICarData } from '@types';
import axios from 'axios';

export const fetchCars = async () => {
    const headers = {
        'X-RapidAPI-Key': 'b286648626mshb5a701605ade81bp154604jsncf5b4b6ff8f6',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const res = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers     
    })
    const resdata = (await res.data) as ICarData[];
    return resdata
}