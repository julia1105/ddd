import React, { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import {Popover, Carousel} from 'antd'
import Slider from "react-slick";
import AddTrex from "./AddTrex"
import Trex from "./Trex"
import axios from 'axios'

import classes from './TrainingCard.module.css'

const Level = [
    {key:1, value:"Предельный"},
    {key:2, value:"Большой"},
    {key:3, value:"Существенный"},
    {key:4, value:"Средний"},
    {key:5, value:"Небольшой"},
  ]
  
  const Type = [
    {key:1, value:"Кардио"},
    {key:2, value:"Силовая"},
    {key:3, value:"На выносливость"},
    {key:4, value:"На скорость"}
  ]

function TrainingCard  ({training, trex, ...props}) {
    
    const [exercises, setExercises] = useState([])
 
    useEffect(() => {
        const id = training.train_id
        axios.get(`/api/listTrainWithExercise/${id}`).then(res => {
            console.log(res);
            setExercises(res.data)
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

    const addTrex = (ex_id) => {
        const id = training.train_id
              axios.post(`/api/newExerciseToTrain/${id}`,
               { 
                exercise_id: ex_id
              })
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

                exercises.push({
                id: exercises.length !== 0 ? exercises.length : 0,
                exercise_id: ex_id
            });
            setExercises(exercises)
            } 


    return (
    <div className={classes.training_card}>
        <Slider {...settings}>
          <div className={classes.trex}>
          <Container>
                <Row >
                    <Col sm={10}>
                    <h3 className={classes.card_title}>{training.name}</h3> 
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
                <Col sm={12}>
                    <ul className={classes.training_param}>
                        <li className={classes.training_param_name}>
                            <span>Тип тренировки:</span>
                        </li>
                        <li className={classes.training_param_value}>
                            <span>{training.type}</span>
                        </li>
                        <li className={classes.training_param_name}>
                            <span>Длительность:</span>
                        </li>
                        <li className={classes.training_param_value}>
                            <span>{training.duration} минут</span>
                        </li>
                    </ul>

                  {/* <ul className={classes.training_param}>
                        <li className={classes.training_param_name}>
                            <span>Длительность:</span>
                        </li>
                        <li className={classes.training_param_value}>
                            <span>{training.duration} минут</span>
                        </li>
                    </ul>  */}

                    <ul className={classes.training_param}>
                        <li className={classes.training_param_name}>
                            <span>Уровень тренировочной нагрузки:</span>
                        </li>
                        <li className={classes.training_param_value}>
                            <span>{training.level}</span>
                        </li>
                    </ul>

                    <ul className={classes.training_param}>
                        <li className={classes.training_param_name}>
                            <span>Описание:</span>
                        </li>
                        <li >
                            <span>{training.definition}</span>
                        </li>
                    </ul>
                    </Col>
                    </Row>
                    </Container>
          </div>
          <div className={classes.trex}>
          <Container>
                <Row>
                    <Col sm={12}>
                    <h4 className={classes.ex_title}>Список упражнений</h4> 
                    
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div className={classes.ex_scroll}>
                        <Trex />
                        {/* {exercises.map(exercise =>(
                        <Trex 
                            exercise = {exercise} key={exercise.train_ex_id}>
                        </Trex>
                    ))
                    } */}
                    </div> 
                        {/* <div className={classes.exList}>
                            {exercises.length === 0 ? 
                                <div> 
                                    <p>Нет спортсменов для отображения</p>
                                </div> :
                                <div>
                                    {exercises.map(exercise =>(
                                    <Athlete 
                                        deleteAthlete = {() => this.deleteAthlete(athlete.participant_id, athlete.id)}
                                        athlete = {athlete} key={athlete.participant_id}>
                                    </Athlete>
                                ))
                                }
                                </div> 
                            }
                                <div className = {classes.add_ul}>
                                    <AddAthlete addAthlete = {this.addAthlete}>
                                        </AddAthlete>
                                </div>
                         </div>  */}
                    </Col>
                    </Row>
                    <Row>
                    <div className = {classes.add_ul}>
                        <AddTrex addTrex = {addTrex}>
                        </AddTrex>
                    </div>
                    </Row>
                    </Container>
          </div>
        </Slider>        
     </div>
    )
}

export default TrainingCard