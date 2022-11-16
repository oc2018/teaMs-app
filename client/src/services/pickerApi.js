import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userApi } from './userApi';

export const pickerApi = createApi({
    reducerPath: 'pickerApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  'http://localhost:8500/'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPicker: builder.query({
            query: (limit) => `/posts?limit=${limit}`,
            providesTags: ['Post'],
        }),
        getPickerById: builder.query({
            query: (pick) => `/posts/${ pick }`,            
            providesTags: ['Post'],
        }),
        createPicker: builder.mutation({
            query: (formData) => ({
                url: '/posts',
                body: formData,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['Post'],
        }),
        createUser: builder.mutation({
            query: (userData) => ({
                url: '/user/signup',
                body: userData,
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            
        }),
        logInUser: builder.mutation({
            query: (userData) => ({
                url: '/user/signin',
                body: userData,
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled}) {
                try{
                     await queryFulfilled;
                     await dispatch(userApi.endpoints.getUser.initiate(null));
                }catch(error) {
                    console.log(error)
                }
            },
        }),

    }),

});

export const { useGetPickerQuery, useCreatePickerMutation, useGetPickerByIdQuery, useCreateUserMutation, useLogInUserMutation } = pickerApi;

