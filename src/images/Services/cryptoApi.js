import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '10d5438734mshe5eab6dd6a4ce40p1ad4a3jsneeb183b9770c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducepath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => '/createRequests'(`/coins?limit=${count}`),
        })
        getExchanges: builder.query({
            query: () => '/createRequests'(`/exchanges`),
        })
        getCryptoDetails: builder.query({
            query: (count) => createRequest(`/coins/${coinId}`),
        })
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coins/${coinId}/history/${timeperiod}`),
        })
    })
});

export const { useGetCryptoQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, seGetCryptoHistorysQuery } = cryptoApi;