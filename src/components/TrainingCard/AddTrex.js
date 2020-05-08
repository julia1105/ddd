import React, {Component} from 'react'
import { Col} from 'react-bootstrap';
import Rodal from 'rodal';
import axios from 'axios'

import classes from './TrainingCard.module.css'
import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddTrex extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          exercises: [],
          ex_id: null,
         };
          this.inputChange = this.inputChange.bind(this);
      }

      componentDidMount() {
        axios.get('/api/listExercises').then(res => {
            console.log(res);
            this.setState({exercises: res.data})
        })
    }
    
     onClose = () => {
        this.setState({ex_id: null});
      }

      addTrex = () => {
        const {ex_id} = this.state;
      
            this.props.addTrex(ex_id);
            this.setState({ex_id: null});
            this.setState({ visible: false });
      };

      show() {
        this.setState({ visible: true });
      }
    
      hide() {
        this.setState({ visible: false });
      }

      inputChange (event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      render() {
        const { exercises } = this.state;

        return(
            <div>
                 <Col>
                 <div className={classes.add_ex} onClick={this.show.bind(this)}>
                 <img className={classes.add_icon} src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="Add icon"  height="18px" width="18px"/>
                 </div>
                        <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={400} height={350} className={classes.rodall} customStyles={divStyle}>
                            
                        {/* <div className={classes.title}>
                            <h3>Добавление упражнения к тренировке</h3>
                            <hr></hr>
                            </div> */}

                            <div className={classes.select}>
                            <label>Упражнение
                            <select className={classes.select_box} name="ex_id" value={this.state.ex_id} onChange={this.inputChange}>
                                {exercises.map(exercise =>(
                                    <option className={classes.options_container} value = {exercise.exercise_id}>
                                        {exercise.name}
                                    </option>
                                ))
                                }
                            </select>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="number" name="heigth" />
                            <label for="heigth" className={classes.label_name}>
                              <span className={classes.content_name}>Количество подходов</span>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="number" name="heigth" />
                            <label for="heigth" className={classes.label_name}>
                              <span className={classes.content_name}>Количество повторений</span>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="number" name="heigth" />
                            <label for="heigth" className={classes.label_name}>
                              <span className={classes.content_name}>Время отдыха (секунды)</span>
                            </label>
                            </div>


                        <button className={classes.button_trex} onClick={this.addTrex}>
                            Добавить
                            </button>
                            
                        </Rodal>                    
                    </Col>
              
             </div>
        )
      }
    }

    export default AddTrex;