import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from './userSlice';


export const userApi = createApi({
    reducerPath: 'userApi',    
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8500/user/`
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query() {
                return {
                    url: 'me',
                    credentials: 'include',
                }
            },
            transformResponse: (result) => result.data,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { userData } = await queryFulfilled;
                    console.log(userData)
                    dispatch(setUser(userData))
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

