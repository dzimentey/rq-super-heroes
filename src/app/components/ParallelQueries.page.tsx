import React from 'react';
import {useQuery} from "react-query";
import {API} from "../../api/api";

export type FriendType = {
    id: number
    name: string
}

export const ParallelQueriesPage = () => {

    const {data: superHeroes, isFetching} = useQuery(`super-heroes`, () => API.getSuperHeroes(),
        {
            select: data => data.data
        })
    const {data: friends, isFetching: frFetching} = useQuery(`friends`, () => API.getFriends(),
        {
            select: data => data.data
        }
    )

    if (frFetching || isFetching) {
        return <h3>Loading...</h3>
    }

    return <div>
        Parallel Queries Page
        {friends?.map(friend => <li>{friend.name}</li>)}
    </div>
}

