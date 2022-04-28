import React from 'react'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/Home.page";
import {RQSuperHeroesPage} from "./components/RQ-super-heroes.page";
import {ReactQueryDevtools} from "react-query/devtools"
import {RqSuperHeroPage} from "./components/RQSuperHero.page";
import {ParallelQueriesPage} from "./components/ParallelQueries.page";
import {SuperHeroesPage} from "./components/Super-heroes.page";


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
                    <Route path={'/rq-super-heroes'} element={<RQSuperHeroesPage/>}/>
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
            </div>
    )
}

export default App;
