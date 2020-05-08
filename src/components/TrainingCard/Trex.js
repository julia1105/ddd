import React from 'react'
import { Col, Container, Row} from 'react-bootstrap';
import classes from './TrainingCard.module.css'
import { NavLink } from 'react-router-dom';

const Trex = ({exercise, ...props}) => {
    // const ActionBtn = () => (
    //     <div className={classes.action_btn}>
         
    //         <span aria-label="delete" role="img" onClick={props.deleteAthlete}>
    //         <img className={classes.delete_icon} src="https://image.flaticon.com/icons/svg/447/447047.svg" alt="Add icon"  height="12px" width="12px"/>
    //         </span>
          
    //     </div>
    //   );

    return (
        <div className = {classes.trexx}>
        
        <Row className = {classes.upr}>
        <Col sm={3}>1. Отжимания от пола</Col>
        <Col sm={2}> 2 подхода</Col>
        <Col sm={3}>30 повторений</Col>
        <Col sm={3}>Отдых 60 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>2. Становая тяга</Col>
        <Col sm={2}> 4 подхода</Col>
        <Col sm={3}>10 повторений</Col>
        <Col sm={3}>Отдых 60 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>3. Присед</Col>
        <Col sm={2}> 3 подхода</Col>
        <Col sm={3}>20 повторений</Col>
        <Col sm={3}>Отдых 60 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>4.Скручивания</Col>
        <Col sm={2}> 3 подхода</Col>
        <Col sm={3}>30 повторений</Col>
        <Col sm={3}>Отдых 30 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>4.Скручивания</Col>
        <Col sm={2}> 3 подхода</Col>
        <Col sm={3}>30 повторений</Col>
        <Col sm={3}>Отдых 30 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>4.Скручивания</Col>
        <Col sm={2}> 3 подхода</Col>
        <Col sm={3}>30 повторений</Col>
        <Col sm={3}>Отдых 30 секунд</Col>
        </Row>
        <Row className = {classes.upr}>
        <Col sm={3}>4.Скручивания</Col>
        <Col sm={2}> 3 подхода</Col>
        <Col sm={3}>30 повторений</Col>
        <Col sm={3}>Отдых 30 секунд</Col>
        </Row>
    </div>
        
    )
}

export default Trex