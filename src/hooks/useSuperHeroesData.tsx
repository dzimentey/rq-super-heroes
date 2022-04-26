import React from 'react';
import {useQuery, UseQueryResult} from "react-query";
import {API} from "../api/api";
import {AxiosError, AxiosResponse} from "axios";
import {HeroType} from "../app/components/super-heroes-page";


export const useSuperHeroesData = (onSuccess: any, onError: any): UseQueryResult<HeroType[], AxiosError> => {
   return useQuery('super-heroes', () => API.getSuperHeroes(),
        {
            // cacheTime: 5000, // keep the data in a cache for 5 sec, then update it. The default duration is 5 minutes.
            // staleTime: 30000, // don't do a data request to the server until staleTime has expired. default staleTime: 0 milliseconds
            // refetchOnMount: true, refetch the data after component did mount (true, false, 'every')
            // refetchOnWindowFocus: true, refetch the data if window has been focused (true, false, 'every')
            // refetchInterval: false, set refetch interval  (false, 2000)
            enabled: true,// deny automatic data fetching (false, true). transfer a fetching to a button
            onSuccess: onSuccess, // invoke onSuccess function after success data fetching
            onError: onError, //  invoke onError function if an error has occurred
            select: (data: AxiosResponse<HeroType[]>) => data.data  // select a data came from Axios response. selected data = HeroType[]
        }
    )
};

