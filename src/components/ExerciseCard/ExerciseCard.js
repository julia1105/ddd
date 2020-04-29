import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import {Popover} from 'antd'

import classes from './ExerciseCard.module.css'

const ExerciseCard = ({exercise, ...props}) => {
    
    return (
        <div className={classes.exercise_card}>
        <Container>
            <Row>
            <Col sm={5} >
                 <img src = {exercise.img}
                 className={classes.card_img}
                 alt="Card image" />
            </Col>
            <Col sm={6}>
                <h3 className={classes.card_title}>{exercise.name}</h3>  
        

                <ul className={classes.exercise_param}>
                    <li className={classes.exercise_param_name}>
                        <span>Тип упражнения:</span>
                    </li>
                    <li className={classes.exercise_param_value}>
                        <span>{exercise.type}</span>
                    </li>
                </ul>
                <p>{exercise.definition}</p>
                </Col>
            <Col sm={1} className="p-0">
            <Popover placement="right"
             content={
                 <button onClick={props.deleteExercise}>Удалить</button>
             } 
             trigger="click">
            <img className={classes.more_icon} src="https://image.flaticon.com/icons/svg/2089/2089792.svg" alt="More icon"  height="22px" width="22px"/>
            </Popover>
            </Col>
                </Row>
                </Container>
                </div>
    )
}

export default ExerciseCard