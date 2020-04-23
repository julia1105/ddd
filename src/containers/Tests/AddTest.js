import React, {Component} from 'react'
import classes from './Test.module.css'
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddTest extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          date: '',
          text: '',
          mark: ''};
          this.inputChange = this.inputChange.bind(this);
      }
    
     onClose = () => {
        this.setState({date: ''});
        this.setState({text: ''});
        this.setState({mark: ''});
      }

      addTest = () => {
        const {date} = this.state;
        const {text} = this.state;
        const {mark} = this.state;

        if (!date  & !text & !mark) {
          alert('Заполните все поля!');
          return;
        }
        
          this.props.addTest(date, text, mark);
          this.setState({date: ''});
          this.setState({text: ''});
          this.setState({mark: ''})
          this.setState({ visible: false })
        
      };

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
        const {input} = this.state;

        return(
          <div>
          <img className={classes.add_icon}  onClick={this.show.bind(this)} src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="Add icon"  height="22px" width="22px"/>
          
          <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={500} className={classes.rodall} customStyles={divStyle}>
         
          <div className={classes.title}>
                <h3>Новый норматив</h3>
                <hr></hr>
          </div>
         
         <div className={classes.datepicker}>
         <label>Дата: 
           <input name="date" type="text"
           value={this.state.date} className={classes.input} onChange={this.inputChange} ></input>
         </label>
         </div>

         <div className={classes.form}>
         <input type="text" name="text" onChange={this.inputChange} value={this.state.text} required />
                <label for="text" className={classes.label_name}>
                  <span className={classes.content_name}>Название норматива</span>
                </label>
        </div>

        <div className={classes.form}>
        <input type="text" name="mark" onChange={this.inputChange} value={this.state.mark} required />
                <label for="mark" className={classes.label_name}>
                  <span className={classes.content_name}>Показатель</span>
                </label>
        </div>

       <button className={classes.button} onClick={this.addTest}>
           Добавить
         </button>
         </Rodal>
      </div>
        )
      }
    }

    export default AddTest;