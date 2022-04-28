import React from 'react';
import {HeroType} from "./Super-heroes.page";
import {AxiosError} from "axios";
import {useSuperHeroesData} from "../../hooks/useSuperHeroesData";
import {Link} from "react-router-dom";

export const RQSuperHeroesPage = () => {

    const onSuccess = (heroes: HeroType[]) => {
        console.log('Perform side effect after data fetching')
        heroes.map(h => console.log(h.name))
    }
    const onError = (error: AxiosError) => {
        console.log('Perform side effect after error has occurred')
        console.log(error.message)
    }

    const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError)

    console.log({isLoading, isFetching})

    if (isLoading || isFetching) {
        return <h3>Loading...</h3> // while page is loading or data is fetching shows Loading text
    }
    if (isError) {
        //const err = error as AxiosError
        return <div>{error?.message}</div> // if an error has occurred , shows error text
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2> <button onClick={() => refetch()}>refetch</button>
            {data?.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            })}

        </>
    )
}
