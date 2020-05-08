import React, {Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios'

import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'

import classes from './ExerciseBase.module.css'
import AddExercise from '../../components/ExerciseCard/AddExercise';
import ChckBox from './CheckBox';
import ChckBox2 from './CheckBox2';


class ExerciseBase extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          exercises: [],
          Filters: { 
              types: [],
              muscles: []
          }
         };
      }

      componentDidMount() {
        axios.get('/api/listExercises').then(res => {
            console.log(res);
            this.setState({exercises: res.data})
        })
        .catch(function (error) {
            console.log(error.response);
          });
    }

      addExercise = (image, title, type, definition) => {
        this.setState(state=> {
            let {exercises} = state;

            const ex = {
                image: image,
                mame: title,
                type: type,
                definition: definition
              };

              alert(ex.definition)

            axios.post('/api/newExercises', 
            { img: image,
                name: title,
                type: type,
                definition: definition})
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

            exercises.push({
                id: exercises.length !== 0 ? exercises.length : 0,
                image: image,
                name: title,
                type: type,
                definition: definition
            });
            return exercises;
        });
    };

    deleteExercise = (exercise_id) => {
     
        axios.delete(`/api/delExercise/${exercise_id}`)
        .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ exercises }) => {
        const newGroups = exercises.filter(el => el.exercise_id !== exercise_id);
        return {exercises: newGroups};
      });
    }
 
    render() {
        
        const { exercises } = this.state;

        const showFilteredResults = (filters) => {


        }

        const handleFilters = (filters, category) => {

                console.log(filters)
            // const newFilters = {...Filters}

            // newFilters[category] = filters

            
            // showFilteredResults(newFilters)
            // this.setState({Filters: newFilters})
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
                        deleteExercise = {() => this.deleteExercise(exercise.exercise_id)}
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
                            <ChckBox2 
                                handleFilters={filters => handleFilters(filters, "muscles")}
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