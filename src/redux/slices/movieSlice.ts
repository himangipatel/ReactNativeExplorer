import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Movie, MovieApiResponse } from '../../screens/popularMovies/movies';
import { BASE_URL, popularMovies } from '../../utils/apiUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface QueryParam{
  page:number
  local:string
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getMovies: builder.query<Movie[], QueryParam>({
      query: (param:QueryParam) => popularMovies(param.page,param.local),
      transformResponse:(response:MovieApiResponse)=>{
        return response.results
      }
    }),
  }),
});


export const {useGetMoviesQuery} = moviesApi;
