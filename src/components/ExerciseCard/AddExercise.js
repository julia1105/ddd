import React, {Component} from 'react'
import { Col} from 'react-bootstrap';
import Rodal from 'rodal';

import classes from './ExerciseCard.module.css'
import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddExercise extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          image: '',
          title: '',
          type: 'Базовое',
          definition: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({image: ''});
        this.setState({title: ''});
        this.setState({type: 'Базовое'});
        this.setState({definition: ''});
      }

      addExercise = () => {
        const {image} = this.state;
        const {title} = this.state;
        const {type} = this.state;
        const {definition} = this.state;

        if (!title & !definition) {
          alert('Заполните все поля!');
          return;
        }
       
            this.props.addExercise(image, title, type, definition);
            this.setState({image: ''});
            this.setState({title: ''});
            this.setState({type: 'Базовое'});
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
                        >Добавить новое упражнение</button>   

                        <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={500} className={classes.rodall} customStyles={divStyle}>
                            
                            <div className={classes.title}>
                            <h3>Новое упражнение</h3>
                            <hr></hr>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="image" onChange={this.inputChange} value={this.state.image} required />
                            <label for="image" className={classes.label_name}>
                             <span className={classes.content_name}>Изображение</span>
                             </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="title" onChange={this.inputChange} value={this.state.title} required />
                            <label for="title" className={classes.label_name}>
                             <span className={classes.content_name}>Название упражнения</span>
                             </label>
                            </div>

                            <div className={classes.select}>
                            <label>Тип упражнения
                                  <select className={classes.select_box} name="type" value={this.state.type} onChange={this.inputChange}>
                                  <option className={classes.options_container} value="Базовое">Базовое</option>
                                  <option className={classes.options_container} value="Изолирующее">Изолирующее</option>
                            </select>
                            </label>
                            </div>

                            <div className={classes.form}>
                            <input type="text" name="definition" onChange={this.inputChange} value={this.state.definition} required />
                            <label for="definition" className={classes.label_name}>
                             <span className={classes.content_name}>Описание упражнения</span>
                             </label>
                            </div>

                        <button className={classes.button} onClick={this.addExercise}>
                            Добавить
                            </button>
                        </Rodal>                    
                    </Col>
              
             </div>
        )
      }
    }

    export default AddExercise;