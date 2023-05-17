import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchCity: build.query({
      query: (search) => ({
        url: `weather`,
        params: {
          q: search,
          appid: process.env.REACT_APP_SECRET_KEY,
          units: 'metric',
          lang: 'ru',
        },
      }),
    }),
  }),
})

export const { useSearchCityQuery } = weatherApi
