import axios from 'axios'
import {HeroType} from "../app/components/Super-heroes.page";
import {FriendType} from "../app/components/ParallelQueries.page";

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
})

// api

export const API = {
    getSuperHeroes() {
        return instance.get<Array<HeroType>>('superheroes')
    },
    getSuperHero(heroId: number) {
        return instance.get<HeroType>(`superheroes/${heroId}`)
    },
    getFriends() {
        return instance.get<Array<FriendType>>('friends')
    },
}

