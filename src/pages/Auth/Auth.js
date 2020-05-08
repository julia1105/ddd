import React, { useState, useEffect, useContext } from 'react'
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'
import {AuthContext} from '../../context/AuthContext'
import classes from './Auth.module.css'
import Input from '../../components/UI/Input/Input'

export const Auth = () => { 
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState ( {
      email: '', password: ''
    })
  
    useEffect ( () => {
      console.log('Error', error)
      message(error)
      clearError()
    }, [error, message, clearError])

    useEffect ( () => {
      window.M.updateTextFields()
    }, [])
  
    const changeHandler = event => {
      setForm({...form, [event.target.name]: event.target.value})
    }
  
    const registerHandler = async () => {
      try {
        const data = await request('/api/auth/register', 'POST', {...form})
        message(data.message)
      } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
          } catch (e) {}
    }
 
    return (
        <div className={classes.Auth}>
             <div>
                 <h1>Авторизация</h1>
                <form onChange={changeHandler} className={classes.AuthForm}>
                <Input
                    label="Email"
                />

                <Input 
                    label="Пароль"
                 />

                <button 
                    disabled = {loading}
                    >Войти
                </button>

                <button 
                    onClick={registerHandler}
                    disabled = {loading}
                     >Зарегистрироваться
                </button>
            </form>
        </div>
    </div>
)
}
