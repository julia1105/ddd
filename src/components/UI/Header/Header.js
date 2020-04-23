import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../../../context/AuthContext'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import classes from './Header.module.css'

export const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/main">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to ="/main" className="nav-link">Главная</Link>
                <Link to ="/training_create" className="nav-link">Создание тренировки</Link>
                <Link to ="/exercises" className="nav-link">База упражнений</Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Link to ="/" className="nav-link">Выйти</Link>
            </Navbar.Collapse>
            </Navbar>






        )
    }
