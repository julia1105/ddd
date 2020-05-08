import React, {Component} from 'react'
import classes from './Measurement.module.css'
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

class AddMeasurement extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          startDate: new Date(),
          text: 'Вес',
          mark: '',
          parameters: []};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({startDate: new Date()});
        this.setState({text: 'Вес'});
        this.setState({mark: ''});
      }

      onSubmit = () => {
        const {startDate} = this.state;
        const {text} = this.state;
        const {mark} = this.state;

        if (!startDate  & !text & !mark) {
          alert('Заполните все поля!');
          return;
        }
        if(text){
          this.props.addMeasure(startDate, text, mark);
          this.setState({startDate: new Date()});
          this.setState({text: 'Вес'});
          this.setState({mark: ''});
          this.setState({ visible: false })
      }
      };

      handleChange = date => {
        this.setState({
          startDate: date
        })
      }

      show() {
        this.setState({ visible: true });
      }
    
      hide() {
        this.setState({ visible: false });
      }

      inputChange = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      render() {
        return(
            <div>
                 <img className={classes.add_icon}  onClick={this.show.bind(this)} src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="Add icon"  height="22px" width="22px"/>
                 
                 <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={450} className={classes.rodall} customStyles={divStyle}>
                
                <form onSubmit={this.onSubmit}>
                <div className={classes.title}>
                <h3>Новое измерение</h3>
                <hr></hr>
                </div>
                
                <div className={classes.datepicker}>
                <label>Дата
                <DatePicker locale="ru" selected={this.state.startDate}
                      onChange={this.handleChange}
                      dateFormat='dd/MM/yyyy'
                  />
                  </label>
                  </div>

                {/* <div className={classes.select}>
                <label>Измерение
                <select className={classes.select_box} name="text" value={this.state.text} onChange={this.inputChange}>
                {parameters.map(parameter =>(
                        <option className={classes.options_container} value = {parameter.parameter_id}>
                            {parameter.title}
                        </option>
                    ))
                    }
                </select>
                </label>
                </div> */}

                <div className={classes.select}>
                <label>Измерение  
                <select className={classes.select_box} name="text" value={this.state.text} onChange={this.inputChange}>
                  <option className={classes.options_container} value="Вес">Вес</option>
                  <option className={classes.options_container} value="Рост">Рост</option>
                  <option className={classes.options_container} value="Cредний пульс">Средний пульс</option>
                  <option className={classes.options_container} value="Вариабельность пульса">Вариабельность пульса</option>
                  <option className={classes.options_container} value="Процент жировой массы">Процент жировой массы</option>
                  <option className={classes.options_container} value="Процент мышечной массы">Процент мышечной массы</option>
                </select>
                </label>
                </div>

                <div className={classes.form}>
                <input type="text" name="mark" onChange={this.inputChange} value={this.state.mark} required />
                <label for="mark" className={classes.label_name}>
                  <span className={classes.content_name}>Показатель</span>
                </label>
                </div>

              <input className={classes.button} type="submit" value="Добавить" />
                </form>
                </Rodal>
              
             </div>
        )
      }
    }

    export default AddMeasurement;