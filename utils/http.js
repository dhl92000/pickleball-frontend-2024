import { API_URL, API_TOKEN } from '@env'

// API_URL=https://api.api-ninjas.com/v1/weather?    lat=43&lon=79

export const fetchWeather = async (lat,lon) => {
    const response = await fetch(`${API_URL}lat=${lat}&lon=${lon}`, { headers: { 'X-Api-Key': API_TOKEN } })
    const data = await response.json()
    return data
}

