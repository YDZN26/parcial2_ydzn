import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    // Si quieres agregar algo más aquí, usa comas "," no puntos y coma ";"
  },
})

export default axios
