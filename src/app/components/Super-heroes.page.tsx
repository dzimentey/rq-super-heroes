import React, {useEffect, useState} from 'react';
import {API} from "../../api/api";
import {AxiosError} from "axios";

export type HeroType = {
    id: number
    name: string
    alterEgo: string
}

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState('')
    const [data, setData] = useState<Array<HeroType>>([])

    useEffect(() => {

        API.getSuperHeroes().then((res) => {
            setData(res.data)
            setTimeout(() => setIsLoading(false), 500)
        }).catch((error: AxiosError) => {
            setError(error.message)
            setIsLoading(false)
        })

    }, [])

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div>
            <h2>Traditional Super Heroes</h2>
            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    )
}
