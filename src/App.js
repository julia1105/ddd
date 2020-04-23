import React from 'react'
import {useRoutes} from './routes'
import { useAuth } from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Header} from './components/UI/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(true)
  
  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
      { isAuthenticated && <Header />}
    
        <Header />
         {routes}
      </AuthContext.Provider>
      
    )
  
}

export default App;
