import React, { Component} from 'react'
import classes from './AddAthlete.module.css'
import Rodal from 'rodal';
import axios from 'axios'

import 'rodal/lib/rodal.css';

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '10px',
  padding: '50px'
};

class AddAthlete extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      name: '',
      surname: '',
      sex: 'мужчина',
      email: '',
      group_id: 2,
      groups: []
     };
     this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/groupList').then(res => {
        console.log(res);
        this.setState({groups: res.data})
    })
}

 onClose = () => {
    this.setState({name: ''});
    this.setState({surname: ''});
    this.setState({sex: 'мужчина'});
    this.setState({email: ''});
    this.setState({group_id: 2});
  }

  addAthlete = () => {
    const {name} = this.state;
    const {surname} = this.state;
    const {sex} = this.state;
    const {email} = this.state;
    const {group_id} = this.state;

    if (!name & !surname & !email) {
      alert('Заполните все поля!');
      return;
    }
    
      this.props.addAthlete(name, surname, sex, email, group_id);
      alert(this.state.name + this.state.surname + this.state.email + this.state.sex + this.state.group_id)
      this.setState({name: ''});
      this.setState({surname: ''});
      this.setState({sex: 'мужчина'});
      this.setState({email: ''});
      this.setState({group_id: 2});
      this.setState({ visible: false })

  };

  inputChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

      show() {
        this.setState({ visible: true });
      }
    
      hide() {
        this.setState({ visible: false });
      }

      render() {
        const { groups } = this.state;

        return(
            <div>
                <button className={classes.button1}
                    onClick={this.show.bind(this)}
                >Добавить спортсмена</button>
                
                <Rodal className={classes.rodal} visible={this.state.visible} onClose={this.hide.bind(this)} width={500} height={500} className={classes.rodall} customStyles={divStyle}>
                
                <div className={classes.form}>
                <input type="text" name="name" onChange={this.inputChange} value={this.state.name} required />
                <label for="name" className={classes.label_name}>
                  <span className={classes.content_name}>Имя</span>
                </label>
                </div>
                
                <div className={classes.form}>
                <input type="text" name="surname" onChange={this.inputChange} value={this.state.surname} required />
                <label for="surname" className={classes.label_name}>
                  <span className={classes.content_name}>Фамилия</span>
                </label>
                </div>

                <div className={classes.form}>
                <input type="email" name="email" onChange={this.inputChange} value={this.state.email} required />
                <label for="email" className={classes.label_name}>
                  <span className={classes.content_name}>Email</span>
                </label>
                </div>

                <div className={classes.select}>
                <label>Пол  
                <select className={classes.select_box} name="sex" value={this.state.sex} onChange={this.inputChange}>
                  <option className={classes.options_container} value="мужчина">Мужчина</option>
                  <option className={classes.options_container} value="женщина">Женщина</option>
                </select>
                </label>
                </div>

                <div className={classes.select}>
                <label>Группа
                <select className={classes.select_box} name="group_id" value={this.state.group_id} onChange={this.inputChange}>
                {groups.map(group =>(
                        <option className={classes.options_container} value = {group.group_id}>
                            {group.title}
                        </option>
                    ))
                    }
                </select>
                </label>
                </div>

              <button className={classes.button} onClick={this.addAthlete}>
                  Добавить
                </button>
                
                </Rodal>
             </div>
        )
      }
    }

    export default AddAthlete;