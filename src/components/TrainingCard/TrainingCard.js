import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

import classes from './TrainingCard.module.css'

const TrainingCard = ({training, ...props}) => {
    
    return (
        <div className={classes.training_card}>
        <Container>
            <Row>
            <Col>
                <h3 className={classes.card_title}>{training.title}</h3>  

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
                </Row>
                </Container>
                </div>
    )
}

export default TrainingCard