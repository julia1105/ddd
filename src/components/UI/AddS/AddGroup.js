import React, {Component} from 'react'
import classes from './AddGroup.module.css'
import Rodal from 'rodal';
import axios from 'axios'

import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  padding: '50px'
};

class AddGroup extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          visible: false,
          input: '' };
      }
    
     onClose = () => {
        this.setState({input: ''});
      }

      onSubmit = (event) => {
        event.preventDefault();

        const {input} = this.state;
        if (!input) {
          alert('Введите название группы');
          return;
        }
        if(input){
          axios.post(`/api/${1}/newGroup`, {title: input, userId: 1}).then(res => {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error.response);
          });

          this.props.addGroup(input);
          this.setState({input: ''});
          this.setState({ visible: false })
      }
      };

      show() {
        this.setState({ visible: true });
      }
    
      hide() {
        this.setState({ visible: false });
      }

      inputChange = event => {
        this.setState({input: event.target.value});
      }

      render() {
        const {input} = this.state;

        return(
            <div>
                <button className={classes.button1}
                    onClick={this.show.bind(this)}
                >Добавить группу</button>
                
                <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} onClick={this.onClose} width={500} height={300} customStyles={divStyle} >

                <form onSubmit={this.onSubmit}>
                <div className={classes.title}>
                <h3>Новая группа</h3>
                <hr></hr>
                </div>

                
                <div className={classes.form}>
                <input type="text" name="name" onChange={this.inputChange} value={input} required />
                <label for="name" className={classes.label_name}>
                  <span className={classes.content_name}>Название группы</span>
                </label>
                </div>

                <input className={classes.button} type="submit" value="Добавить" />
                </form>
                </Rodal>
              
             </div>
        )
      }
    }

    export default AddGroup;