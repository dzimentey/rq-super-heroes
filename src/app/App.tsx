import React from 'react'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/home-page";
import {SuperHeroesPage} from "./components/super-heroes-page";
import {RqSuperHeroesPage} from "./components/RQ-super-heroes-page";
import {ReactQueryDevtools} from "react-query/devtools"
import {RqSuperHeroPage} from "./components/RQSuperHero.page";
import {ParallelQueriesPage} from "./components/ParallelQueries.page";


const App = () => {

    return (
            <div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/super-heroes'}>Traditional Super Heroes</Link></li>
                        <li><Link to={'/rq-super-heroes'}>RQ Super Heroes</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    {/*<Route path={'/rq-dynamic-parallel'} element={<DynamicsParallelQueries heroesIdS={[1,3]} />} />*/}
                    <Route path={'/rq-parallel'} element={<ParallelQueriesPage/>}/>
                    <Route path={`/rq-super-heroes/:heroId`} element={<RqSuperHeroPage/>}/>
                    <Route path={'/super-heroes'} element={<SuperHeroesPage/>}/>
                    <Route path={'/rq-super-heroes'} element={<RqSuperHeroesPage/>}/>
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
            </div>
    )
}

export default App;
