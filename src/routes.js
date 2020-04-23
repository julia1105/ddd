import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import CreateTraining from './pages/CreateTraining/CreateTraining'
import TrPage from './pages/TrPage/TrPage'
import Analythics from './pages/Analythics/Analythics'
import ExerciseBase from './pages/ExerciseBase/ExerciseBase'
import SportsmanPage from './pages/SportsmanPage/SportsmanPage'
import {Auth} from './pages/Auth/Auth.js'

export const useRoutes = isAthenticated => {
    if (isAthenticated) {
        return (
            <Switch>
                <Route path="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/sportsman/:id"render={(props) => <SportsmanPage {...props} />}>
                </Route>
                <Route path="/training_create" exact>
                    <CreateTraining/>
                </Route>
                <Route path="/training" exact>
                    <TrPage />
                </Route>
                <Route path="/exercises" exact>
                    <ExerciseBase/>
                </Route>
                <Redirect to="/main"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                    <Auth/>
                </Route>
            <Redirect to="/"/>
        </Switch>
    )
}