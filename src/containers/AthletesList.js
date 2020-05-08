import React, {Component} from 'react'
import axios from 'axios'

import Athlete from '../components/UI/Athlete/Athlete'
import AddAthlete from '../components/UI/AddS/AddAthlete'

import classes from './AthletesList.module.css'

export default class AthletesList extends Component {

    constructor() {
        super()

        this.state = {
            athletes: [],
            groups: []
        }
    }

    componentDidMount() {
        axios.get('/api/listPartWithGroup').then(res => {
            console.log(res);
            this.setState({athletes: res.data})
        })

        axios.get('/api/groupList').then(res => {
            console.log(res);
            this.setState({groups: res.data})
        })
    }

    addAthlete = (name, surname, sex,  age, weigth, heigth, email, group_id) => {

        const v = age;
        const ages = new Date(v).toLocaleDateString()
        const { groups } = this.state;

        this.setState(state => {
            let {athletes} = state;

            const athlete = {
                name: name,
                surname: surname,
                sex: sex,
                email: email,
                age: ages,
                weigth: weigth,
                heigth: heigth,
                group_id: group_id
              };

              alert (athlete.group_id)

              
              axios.post('/api/newParticipant', { name: name,
                surname: surname,
                sex: sex,
                email: email,
                age: ages,
                weigth: weigth,
                heigth: heigth,
                group_id: group_id})
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

             const group = groups.filter(g => g.group_id === group_id)[0]

            athletes.push({
                id: athletes.length !== 0 ? athletes.length : 0,
                name: name,
                surname: surname,
                sex: sex,
                email: email,
                age: ages,
                weigth: weigth,
                heigth: heigth,
                group_id: group_id,
                group: group
            });

            axios.get('/api/listPartWithGroup').then(res => {
                console.log(res);
                this.setState({athletes: res.data})
            })
            
            return athletes
        });
    };

    deleteAthlete = (participant_id, id) => {
        const index = this.state.athletes.map(athlete => athlete.id).indexOf(id);
        
        axios.delete(`/api/delSportsmen/${participant_id}`)
        .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ athletes }) => {
        const newGroups = athletes.filter(el => el.participant_id !== participant_id);
        return {athletes: newGroups};
      });
    }


    render() {
        const { athletes } = this.state;

        return (
            <div className={classes.AthletesList}>
                {athletes.length === 0 ? 
                    <div> 
                        <p>Нет спортсменов для отображения</p>
                    </div> :
                    <div>
                        {athletes.map(athlete =>(
                        <Athlete 
                            deleteAthlete = {() => this.deleteAthlete(athlete.participant_id, athlete.id)}
                            athlete = {athlete} key={athlete.participant_id}>
                        </Athlete>
                    ))
                    }
                    </div> 
                }
                    <div className = {classes.add_ul}>
                        <AddAthlete addAthlete = {this.addAthlete}>
                            </AddAthlete>
                    </div>
            </div>
        )
    }
}