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
          data: new Date(),
          deinition: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({data: new Date()});
        this.setState({deinition: ''});
      }

      onSubmit = () => {
        const {data} = this.state;
        const {deinition} = this.state;

        if (!data & !deinition) {
          alert('Заполните все поля!');
          return;
        }
       
          this.props.addEvent(data, deinition);
          this.setState({data: new Date()});
          this.setState({deinition: ''});
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
          data: date
        })
      }
      
      inputChange (event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }

      render() {

        return(
            <div>
                  <img className={classes.add_icon}  onClick={this.show.bind(this)} src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="Add icon"  height="22px" width="22px"/>
                 
                 <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={400} className={classes.rodall} customStyles={divStyle}>
                
                 <form onSubmit={this.onSubmit}>
                <div className={classes.title}>
                <h3>Новое событие</h3>
                <hr></hr>
                </div>
                
                <div className={classes.datepicker}>
                <label>Дата 
                  <DatePicker locale="ru" selected={this.state.data}
                      onChange={this.handleChange}
                      dateFormat='dd/MM/yyyy'
                  />
                </label>
                </div>

                <div className={classes.form}>
                <input type="text" name="deinition" onChange={this.inputChange} value={this.state.deinition} required />
                <label for="deinition" className={classes.label_name}>
                  <span className={classes.content_name}>Название события</span>
                </label>
                </div>

              <input className={classes.button} type="submit" value="Добавить" />
                </form>
                </Rodal>
             </div>
        )
      }
    }

    export default AddEvent;