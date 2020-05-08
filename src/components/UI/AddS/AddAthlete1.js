import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import Rodal from 'rodal';
import axios from 'axios'
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';

import classes from './AddAthlete.module.css'
import "react-datepicker/dist/react-datepicker.css";
import 'rodal/lib/rodal.css';

registerLocale('ru', ru)

const divStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.05)',
  borderRadius: '10px',
  padding: '50px'
};

function AddAthlete1 (props) {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [sex, setSex] = useState('мужчина');
    const [age, setAge] = useState( new Date());
    const [weigth, setWeigth] = useState(null);
    const [heigth, setHeigth] = useState(null);
    const [email, setEmail] = useState('');
    const [group_id, setGroup] = useState(2);

    const [groups, SetGroups] = useState([])

    const onClose = () => {
        setName('');
        setSurname('');
        setSex('мужчина');
        setAge(new Date());
        setWeigth(null);
        setHeigth(null);
        setEmail('');
        setGroup(2);
      }


    const onSubmit = (event) => {
        event.preventDefault();

        if (!name & !surname & !email) {
          alert('Заполните все поля!');
          return;
        }

        const athlete = {
            name: name,
            surname: surname,
            sex: sex,
            email: email,
            age: age,
            weigth: weigth,
            heigth: heigth,
            group_id: group_id
        }

        axios.post('/api/newParticipant', athlete)
                .then(res => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error.response);
              });

          setName('');
          setSurname('');
          setSex('мужчина');
          setAge(new Date());
          setWeigth(null);
          setHeigth(null);
          setEmail('');
          setGroup(2);
      };

      const handleChange = date => {
        setAge(date);
      }
    
      const onNameChange = (event) => {
        setName(event.currentTarget.value)
    }

    const onSurnameChange = (event) => {
        setSurname(event.currentTarget.value)
    }

    const onSexChange = (event) => {
        setSex(event.currentTarget.value)
    }

    const onWeigthChange = (event) => {
        setWeigth(event.currentTarget.value)
    }

    const onHeigthChange = (event) => {
        setHeigth(event.currentTarget.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onGroupChange = (event) => {
        setGroup(event.currentTarget.value)
    }

          const show = () => {
            setVisible(true)
          }
        
          const hide = () => {
            setVisible(false)
          }

          return(
            <div>
                <button className={classes.button1}
                    onClick={show.bind(this)}
                >Добавить спортсмена</button>
                
                <Rodal className={classes.rodal} visible={visible} onClose={hide.bind(this)} width={500} height={750} className={classes.rodall} customStyles={divStyle}>
               
                <div className={classes.title}>
                <h3>Новый спортсмен</h3>
                <hr></hr>
                </div>

                <form onSubmit={onSubmit}> 
                <div className={classes.form}>
                <input type="text" name="name" onChange={onNameChange} value={name} required />
                <label for="name" className={classes.label_name}>
                  <span className={classes.content_name}>Имя</span>
                </label>
                </div>
                
                <div className={classes.form}>
                <input type="text" name="surname"  onChange={onSurnameChange} value={surname} required />
                <label for="surname" className={classes.label_name}>
                  <span className={classes.content_name}>Фамилия</span>
                </label>
                </div>

                <div className={classes.form}>
                <input type="email" name="email"  onChange={onEmailChange} value={email} required />
                <label for="email" className={classes.label_name}>
                  <span className={classes.content_name}>Email</span>
                </label>
                </div>

                <div className={classes.form}>
                <input type="text" name="heigth" onChange={onHeigthChange} value={heigth} required />
                <label for="heigth" className={classes.label_name}>
                  <span className={classes.content_name}>Рост</span>
                </label>
                </div>

                <div className={classes.form}>
                <input type="text" name="weigth"  onChange={onWeigthChange} value={weigth} required />
                <label for="weigth" className={classes.label_name}>
                  <span className={classes.content_name}>Вес</span>
                </label>
                </div>

                <div className={classes.datepicker}>
                <label>Дата рождения: 
                <DatePicker locale="ru" selected={age}
                      onChange={handleChange}
                      dateFormat='dd/MM/yyyy'
                  />
                  </label>
                  </div>

                <div className={classes.select}>
                <label>Пол  
                <select className={classes.select_box} name="sex"  value={sex} onChange={onSexChange}>
                  <option className={classes.options_container} value="мужчина">Мужчина</option>
                  <option className={classes.options_container} value="женщина">Женщина</option>
                </select>
                </label>
                </div>

                <div className={classes.select}>
                <label>Группа
                <select className={classes.select_box} name="group_id"  value={group_id} onChange={onGroupChange}>
                {groups.map(group =>(
                        <option className={classes.options_container} value = {group.group_id}>
                            {group.title}
                        </option>
                    ))
                    }
                </select>
                </label>
                </div>

              <input className={classes.button} type="submit" value="Добавить"/>
                </form>
                </Rodal>
             </div>
        )
}

export default AddAthlete1