import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.jikan.moe/v3'

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v3' }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({
            query: () => `/season/2021/summer`
        })
    })
})

export const { useGetTopAnimeQuery } = animeApi;