import React, {Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios'

import AddTraining from '../../components/TrainingCard/AddTraining'
import TrainingCard from '../../components/TrainingCard/TrainingCard'
import ChckBox from './CheckBox';
import ChckBox2 from './CheckBox2';

import classes from './CreateTraining.module.css'

class CreateTraining extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          trainings: [],
          types: [],
          complexity: []
         };
      }


      componentDidMount() {
        axios.get('/api/listTrain').then(res => {
            console.log(res);
            this.setState({trainings: res.data})
        })
    }

    addTraining = (name, type, level, duration, definition) => {
        this.setState(state=> {
            let {trainings} = state;

            const tr = {
                name: name,
                type: type,
                level: level,
                duration: duration,
                definition: definition
              };


            axios.post('/api/newTrain', 
            { name: name,
                type: type,
                level: level,
                duration: duration,
                definition: definition})
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

                trainings.push({
                id: trainings.length !== 0 ? trainings.length : 0,
                name: name,
                type: type,
                level: level,
                duration: duration,
                definition: definition
            });
            return trainings;
        });
    };

    deleteTraining = (train_id) => {
     
        axios.delete(`/api/delTrain/${train_id}`)
        .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ trainings }) => {
        const newTrains = trainings.filter(el => el.train_id !== train_id);
        return {trainings: newTrains};
      });
    }


    render() {
        const { trainings } = this.state;

        const handleFilters = (filters, category) => {

            console.log(filters)
        //const newFilters = {...Filters}

        //newFilters[category] = filters

        //showFilteredResults(newFilters)
       // setFilters(newFilters)
    }

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
                        deleteTraining = {() => this.deleteTraining(training.train_id)}
                        training = {training} key={training.train_id}>
                        </TrainingCard>
                        ))
                    }
                    </Col>
                    <Col sm={4} className="p-0">
                        <div className={classes.filters}>
                        <ChckBox 
                                handleFilters={filters => handleFilters(filters, "types")}
                            />
                     <ChckBox2 
                            handleFilters={filters => handleFilters(filters, "complexity")}
                     />
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