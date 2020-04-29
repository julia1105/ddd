import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import {Popover} from 'antd'

import classes from './TrainingCard.module.css'

const TrainingCard = ({training, ...props}) => {
    
    return (
        <div className={classes.training_card}>
        <Container>
            <Row>
                <Col sm={10}>
                <h3 className={classes.card_title}>{training.title}</h3> 
                </Col>
                <Col sm={2} className="p-0">
                <Popover placement="right"
                    content={
                        <button onClick={props.deleteTraining}>Удалить</button>
                    } 
                    trigger="click">
                    <img className={classes.more_icon} src="https://image.flaticon.com/icons/svg/2089/2089792.svg" alt="More icon"  height="22px" width="22px"/>
                 </Popover>
                </Col>
            </Row>
            <Row>
            <Col sm={5}>
                <ul className={classes.training_param}>
                    <li className={classes.training_param_name}>
                        <span>Цель:</span>
                    </li>
                    <li className={classes.training_param_value}>
                        <span>{training.goal}</span>
                    </li>
                </ul>

                <ul className={classes.training_param}>
                    <li className={classes.training_param_name}>
                        <span>Длительность:</span>
                    </li>
                    <li className={classes.training_param_value}>
                        <span>{training.duration}</span>
                    </li>
                </ul>

                <ul className={classes.training_param}>
                    <li className={classes.training_param_name}>
                        <span>Сложность:</span>
                    </li>
                    <li className={classes.training_param_value}>
                        <span>{training.complexity}</span>
                    </li>
                </ul>

                <div className={classes.training_param}>
                <p className={classes.training_param_name}>Описание: {training.text}</p>
                </div>
                </Col>
                <Col  sm={6}>
                    <p className={classes.ex_title}>
                        Упражнения
                        <img className={classes.add_icon} src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="Add icon"  height="18px" width="18px"/>
                        </p>
                    
                </Col>
               
                </Row>
                </Container>
                </div>
    )
}

export default TrainingCard