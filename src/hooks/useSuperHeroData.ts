import {useQuery, UseQueryResult} from "react-query";
import {API} from "../api/api";
import {HeroType} from "../app/components/super-heroes-page";
import {AxiosError, AxiosResponse} from "axios";


export const useSuperHeroData = (heroId: number) : UseQueryResult<AxiosResponse<HeroType>, AxiosError> => {
    return useQuery([`super-hero`, heroId], () => API.getSuperHero(heroId))

}

