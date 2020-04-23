import React, {Component} from 'react'
import axios from 'axios'

import Athlete from '../components/UI/Athlete/Athlete'
import AddAthlete from '../components/UI/AddS/AddAthlete'

import classes from './AthletesList.module.css'

export default class AthletesList extends Component {

    constructor() {
        super()

        this.state = {
            athletes: []
        }
    }

    componentDidMount() {
        axios.get('/api/listPartWithGroup').then(res => {
            console.log(res);
            this.setState({athletes: res.data})
        })
    }

    addAthlete = (name, surname, sex, email, group_id) => {

        this.setState(state => {
            let {athletes} = state;

            const athlete = {
                name: name,
                surname: surname,
                sex: sex,
                email: email,
                group_id: group_id
              };

              alert(athlete.name + athlete.surname + athlete.email + athlete.sex + athlete.group_id)

              axios.post('/api/newParticipant', { name: name,
                surname: surname,
                sex: sex,
                email: email,
                group_id: group_id})
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });

            athletes.push({
                id: athletes.length !== 0 ? athletes.length : 0,
                name: name,
                surname: surname,
                sex: sex,
                email: email,
                group_id: group_id
            });
            return athletes;

        });
    };

    deleteAthlete = id => {
        const index = this.state.athletes.map(athlete => athlete.id).indexOf(id);
        alert(index)
        
        axios.delete(`api/delSportsmen/${id}`)
        .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

        this.setState( state => {
            let {athletes} = state;
            
            delete athletes[index];
            return athletes;
        })
    }


    render() {
        const { athletes } = this.state;

        return (
            <div className={classes.AthletesList}>
                    {athletes.map(athlete =>(
                        <Athlete 
                            deleteAthlete = {() => this.deleteAthlete(athlete.participant_id)}
                            athlete = {athlete} key={athlete.participant_id}>
                        </Athlete>
                    ))
                    }
                    <div className = {classes.add_ul}>
                        <AddAthlete addAthlete = {this.addAthlete}>
                            </AddAthlete>
                    </div>
            </div>
        )
    }
}