import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

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
            <Col sm={7}>
                <h3 className={classes.card_title}>{exercise.name}</h3>  
                <ul className={classes.exercise_param}>
                    <li className={classes.exercise_param_name}>
                        <span>Тип упражнения:</span>
                    </li>
                    <li className={classes.exercise_param_value}>
                        <span>{exercise.type}</span>
                    </li>
                </ul>
                <ul className={classes.exercise_param}>
                    <li className={classes.exercise_param_name}>
                        <span>Целевые мышцы:</span>
                    </li>
                    <li className={classes.exercise_param_value}>
                        <span>{exercise.type}</span>
                    </li>
                </ul>
                <p>{exercise.definition}</p>
                </Col>
                </Row>
                </Container>
                </div>
    )
}

export default ExerciseCard