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
          name: '',
          type: 1,
          level: 1,
          duration: null,
          definition: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({name: ''});
        this.setState({type: 1});
        this.setState({level: 1});
        this.setState({duration: null});
        this.setState({definition: ''});
      }

      onSubmit = (event) => {
        event.preventDefault();

        const {name} = this.state;
        const {type} = this.state;
        const {level} = this.state;
        const {duration} = this.state;
        const {definition} = this.state;
    
            this.props.addTraining(name, type, level, duration, definition);
            this.setState({name: ''});
            this.setState({type: 1});
            this.setState({level: 1});
            this.setState({duration: null});
            this.setState({definition: ''});
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
                            
                        <form onSubmit={this.onSubmit}>
                        <div className={classes.title}>
                            <h3>Новая тренировка</h3>
                            <hr></hr>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="name" onChange={this.inputChange} value={this.state.name} required />
                            <label for="name" className={classes.label_name}>
                             <span className={classes.content_name}>Название тренировки</span>
                             </label>
                            </div>

                            <div className={classes.select}>
                            <label>Тип тренировки
                                  <select className={classes.select_box} name="type" value={this.state.type} onChange={this.inputChange}>
                                  {Type.map(item => (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                  ))}
                            </select>
                            </label>
                            </div>


                            <div className={classes.select}>
                            <label>Уровень тренировочной нагрузки 
                                  <select className={classes.select_box} name="level" value={this.state.level} onChange={this.inputChange}>
                                  {Level.map(item => (
                                    <option key={item.key} value={item.key}>{item.value}</option>
                                  ))}
                            </select>
                            </label>
                            </div>

                           <div className={classes.form}>
                            <input  type="number" min="5" name="duration" onChange={this.inputChange} value={this.state.duration} required />
                            <label for="duration" className={classes.label_name}>
                             <span className={classes.content_name}>Длительность (в минутах)</span>
                             </label>
                            </div> 

                            <label >
                             <span className={classes.content_name}>Описание</span>
                             </label>
                            <div className={classes.form}>
                          
                            <textarea className={classes.text_area} type="text" name="definition" onChange={this.inputChange} value={this.state.definition} cols="55" rows="3" required />
                             </div>

                             <input className={classes.button} type="submit" value="Добавить" />
                            </form>
                        </Rodal>                    
                    </Col>
              
             </div>
        )
      }
    }

    export default AddTraining;