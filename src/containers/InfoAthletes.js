import React, {Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';

import MeasurementWindow from './MeasurementWindow/MeasurementWindow';
import EventsWindow from './Events/EventsWindow'
import TestsWindow from './Tests/TestsWindow'

import classes from './InfoAthletes.module.css'

export default class InfoAthletes extends Component {

    render() {
        return (
            <div className={classes.inf_sp}> 
                 <div className={classes.profile_info}> 
                 <div className={classes.img}>
                <img src="https://img.icons8.com/ios-filled/90/000000/user-male-circle.png" alt="Profile icon"/>     
                </div>        
                    <div className={classes.info}>
                        <div className={classes.left}>
                        <p>Иван Иванов
                        <img className={classes.edit_icon} src="https://image.flaticon.com/icons/svg/1250/1250925.svg" alt="Edit icon" height="15px" width="15px"/>
                        </p>
                        <p>Мужчины мастера</p>
                        <p>ivan@mail.ru</p>
                        </div>
                        <div  className={classes.right}>
                        <p>Возраст: 20</p>
                        <p>Рост: 185</p>
                        <p>Вес: 80</p>
                        </div>
                    </div>
                </div>
                    <EventsWindow />
                    <MeasurementWindow />
                    <TestsWindow />
            </div>
        )
    }
}
