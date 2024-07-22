import { API_URL, API_TOKEN } from '@env'

export const fetchWeather = async () => {
    console.log(API_TOKEN)
    const response = await fetch(API_URL, { headers: { 'X-Api-Key': API_TOKEN } })
    const data = await response.json()
    console.log(data)
    return data
}

