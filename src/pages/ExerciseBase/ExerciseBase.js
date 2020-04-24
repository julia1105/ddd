import React, {Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios'

import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'

import classes from './ExerciseBase.module.css'
import AddExercise from '../../components/ExerciseCard/AddExercise';
import ChckBox from './CheckBox';

class ExerciseBase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          exercises: [],
          Filters: { 
              types: []
          }
         };
      }

      componentDidMount() {
        axios.get('/api/listExercises').then(res => {
            console.log(res);
            this.setState({exercises: res.data})
        })
    }

      addExercise = (image, title, type, text) => {
        this.setState(state=> {
            let {exercises} = state;

            axios.post('/api/newExercises', 
            { img: image,
                name: title,
                type: type,
                definition: text})
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

            exercises.push({
                id: exercises.length !== 0 ? exercises.length : 0,
                image: image,
                title: title,
                type: type,
                text: text
            });
            return exercises;
        });
    };

 
    render() {
        
        const { exercises } = this.state;

        

        const handleFilters = (filters, category) => {

                console.log(filters)
            //const newFilters = {...Filters}

            //newFilters[category] = filters

            //showFilteredResults(newFilters)
           // setFilters(newFilters)
        }

        return (
            <div >
            <Container fluid>
                <Row className={classes.header}>
                    <Col>
                        <h1>База упражнений</h1>                        
                    </Col>
                </Row>
                <Row className={classes.add_tr}>
                    <AddExercise addExercise = {this.addExercise}/>
                </Row>
                <Row>
                    <Col className={classes.excersice_card1} sm={8} xs={8} className="p-0">
                    {exercises.map(exercise =>(
                        <ExerciseCard 
                        exercise = {exercise} key={exercise.exercise_id}>
                        </ExerciseCard>
                        ))
                    }
                    </Col>
                    <Col sm={4} className="p-0">
                        <div className={classes.filters}>
                            <ChckBox 
                                handleFilters={filters => handleFilters(filters, "types")}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default ExerciseBase