import React, {Component} from 'react'
import classes from './Event.module.css'
import Rodal from 'rodal';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
 
import "react-datepicker/dist/react-datepicker.css";
import 'rodal/lib/rodal.css';

registerLocale('ru', ru)

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddEvent extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          startDate: new Date(),
          text: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({startDate: new Date()});
        this.setState({text: ''});
      }

      addEvent = () => {
        const {startDate} = this.state;
        const {text} = this.state;

        if (!startDate & !text) {
          alert('Заполните все поля!');
          return;
        }
       
          this.props.addEvent(startDate, text);
          this.setState({startDate: new Date()});
          this.setState({text: ''});
          this.setState({ visible: false })
      
      };

      show() {
        this.setState({ visible: true });
      }
    
      hide() {
        this.setState({ visible: false });
      }

      handleChange = date => {
        this.setState({
          startDate: date
        })
      }
      
      inputChange (event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      render() {

        return(
            <div>
                 <img className={classes.add_icon}  onClick={this.show.bind(this)} src="https://icon-icons.com/icons2/950/PNG/256/add_icon-icons.com_74155.png" alt="Add icon"  height="22px" width="22px"/>
                 
                 <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={400} className={classes.rodall} customStyles={divStyle}>
                
                <div className={classes.title}>
                <h3>Новое событие</h3>
                <hr></hr>
                </div>
                
                <div className={classes.datepicker}>
                <label>Дата: 
                  <DatePicker locale="ru" selected={this.state.startDate}
                      onChange={this.handleChange}
                      dateFormat='dd/MM/yyyy'
                  />
                </label>
                </div>

                <div className={classes.form}>
                <input type="text" name="text" onChange={this.inputChange} value={this.state.text} required />
                <label for="text" className={classes.label_name}>
                  <span className={classes.content_name}>Название события</span>
                </label>
                </div>

              <button className={classes.button} onClick={this.addEvent}>
                  Добавить
                </button>
                </Rodal>
             </div>
        )
      }
    }

    export default AddEvent;