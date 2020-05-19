import React from 'react'
import {Route} from 'react-router-dom'

import {LoginForm,  RegisterForm} from '../../modules/index'

const Auth = () => {
    
    return (
        <div>
            <Route exact path="/login"> <LoginForm /> </Route>
            <Route exact path="/register"> <RegisterForm /> </Route>
        </div>
    )
}

export default Auth