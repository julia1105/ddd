import React, {Component} from 'react'
import { Col} from 'react-bootstrap';
import Rodal from 'rodal';

import classes from './TrainingCard.module.css'
import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddTraining extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          title: '',
          goal: '',
          complexity: '',
          duration: '',
          text: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({title: ''});
        this.setState({goal: ''});
        this.setState({complexity: ''});
        this.setState({duration: ''});
        this.setState({text: ''});
      }

      addTraining = () => {
        const {title} = this.state;
        const {goal} = this.state;
        const {complexity} = this.state;
        const {duration} = this.state;
        const {text} = this.state;

        if (!title & !text) {
          alert('Заполните все поля!');
          return;
        }
            this.props.addTraining(title, goal, complexity, duration, text);
            this.setState({title: ''});
            this.setState({goal: ''});
            this.setState({complexity: ''});
            this.setState({duration: ''});
            this.setState({text: ''});
            this.setState({ visible: false })
      
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

        return(
            <div>
                 <Col>
                        <button className={classes.add_button}
                        onClick={this.show.bind(this)}
                        >Добавить новую тренировку</button>   

                        <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={550} className={classes.rodall} customStyles={divStyle}>
                            
                        <div className={classes.title}>
                            <h3>Новая тренировка</h3>
                            <hr></hr>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="title" onChange={this.inputChange} value={this.state.title} required />
                            <label for="title" className={classes.label_name}>
                             <span className={classes.content_name}>Название тренировки</span>
                             </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="goal" onChange={this.inputChange} value={this.state.goal} required />
                            <label for="goal" className={classes.label_name}>
                             <span className={classes.content_name}>Цель</span>
                             </label>
                            </div>

                            <div className={classes.select}>
                            <label>Сложность: 
                                  <select className={classes.select_box} name="complexity" value={this.state.complexity} onChange={this.inputChange}>
                                  <option className={classes.options_container} value="Легкая">Легкая</option>
                                  <option className={classes.options_container} value="Средняя">Средняя</option>
                                  <option className={classes.options_container} value="Тяжелая">Тяжелая</option>
                            </select>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="duration" onChange={this.inputChange} value={this.state.duration} required />
                            <label for="duration" className={classes.label_name}>
                             <span className={classes.content_name}>Длительность</span>
                             </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="text" onChange={this.inputChange} value={this.state.text} required />
                            <label for="text" className={classes.label_name}>
                             <span className={classes.content_name}>Описание</span>
                             </label>
                             </div>

                        <button className={classes.button} onClick={this.addTraining}>
                            Добавить
                            </button>
                            
                        </Rodal>                    
                    </Col>
              
             </div>
        )
      }
    }

    export default AddTraining;