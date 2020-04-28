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

class AddTraining extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          title: '',
          goal: 1,
          complexity: 1,
          duration: '',
          text: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({title: ''});
        this.setState({goal: 1});
        this.setState({complexity: 1});
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
            this.setState({goal: 1});
            this.setState({complexity: 1});
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

                            <div className={classes.select}>
                            <label>Тип тренировки
                                  <select className={classes.select_box} name="goal" value={this.state.goal} onChange={this.inputChange}>
                                  {Type.map(item => (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                  ))}
                            </select>
                            </label>
                            </div>


                            <div className={classes.select}>
                            <label>Уровень тренировочной нагрузки 
                                  <select className={classes.select_box} name="complexity" value={this.state.complexity} onChange={this.inputChange}>
                                  {Level.map(item => (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                  ))}
                            </select>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="duration" onChange={this.inputChange} value={this.state.duration} required />
                            <label for="duration" className={classes.label_name}>
                             <span className={classes.content_name}>Длительность (в минутах)</span>
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