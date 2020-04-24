import React, {Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';

import AddTraining from '../../components/TrainingCard/AddTraining'
import TrainingCard from '../../components/TrainingCard/TrainingCard'

import classes from './CreateTraining.module.css'

class CreateTraining extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          trainings: [ 
              {id: 0, title: 'Тренировка 1', goal: 'Жиросжигание', complexity:'Сложный', duration: '60', text: 'opisanieopisanieopisanie'}
          ]
         };
      }

    addTraining = (title, goal, complexity, duration, text) => {
        this.setState(state=> {
            let {trainings} = state;
            trainings.push({
                id: trainings.length !== 0 ? trainings.length : 0,
                title: title,
                goal: goal,
                complexity: complexity,
                duration: duration,
                text: text
            });
            return trainings;
        });
    };

    render() {
        const { trainings } = this.state;

        return (
            <div className={classes.CreateTraining}>
            <div >
            <Container fluid>
                <Row className={classes.header}>
                    <Col>
                        <h1>База тренировок</h1>                       
                    </Col>
                </Row>
                <Row className={classes.add_tr}>
                <AddTraining addTraining = {this.addTraining}/>
                </Row>
                <Row>
                    <Col className={classes.excersice_card1} sm={8} xs={8} className="p-0">
                        {trainings.map(training =>(
                        <TrainingCard 
                        training = {training} key={training.id}>
                        </TrainingCard>
                        ))
                    }
                    </Col>
                    <Col sm={4} className="p-0">
                        <div className={classes.filters}>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
            </div>
        )
    }
}

export default CreateTraining