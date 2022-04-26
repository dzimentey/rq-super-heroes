import React from 'react';
import {useQueries, UseQueryResult} from "react-query";
import {API} from "../../api/api";

type PropsType = {
    heroesIdS: number[]
}

export const DynamicsParallelQueries = ({heroesIdS}: PropsType) => {
    const queryResults = useQueries(
       heroesIdS.map(id => {
                return {
                    queryKey: ['super-hero', id],
                    queryFn: () => API.getSuperHero(id),
                }
            }
        )
    )
    return <div>DynamicsParallelQueriesPage </div>
}
