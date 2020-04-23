import React, {Component} from 'react'
import GroupList from '../../containers/GroupList'
import AthletesList from '../../containers/AthletesList'
import TrPage from '../TrPage/TrPage'
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios'

import MeasurementWindow from '../../containers/MeasurementWindow/MeasurementWindow';
import EventsWindow from '../../containers/Events/EventsWindow'
import TestsWindow from '../../containers/Tests/TestsWindow'

import classes from './SportsmanPage.module.css'
import InfoAthletes from '../../containers/InfoAthletes';


class SportsmanPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            athlete: [],
         measures: []
         };
      }
     
      componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
              axios.get(`/api/listONEPartModels/${id}`)
              .then(res => {
                console.log(res);
                this.setState({
                  athlete: res.data
                });
              })
              .catch(function (error) {
                console.log(error.response);
              });
            }    
        }

render(){
    
    const { athlete } = this.state;
    return (
        <div>
            <div className={classes.main_tab}>
            <Tabs className="justify-content-center" defaultActiveKey="info" id="uncontrolled-tab-example">
                <Tab eventKey="info" title="Информация о спортсмене">
                    <div className={classes.inf_sp}> 
                    <div className={classes.profile_info}> 
                    <div className={classes.img}>
                    <img src="https://img.icons8.com/ios-filled/90/000000/user-male-circle.png" alt="Profile icon"/>     
                    </div>        
                        <div className={classes.info}>
                            <div className={classes.left}>
                            <p>{athlete.name}
                            <img className={classes.edit_icon} src="https://image.flaticon.com/icons/svg/1250/1250925.svg" alt="Edit icon" height="15px" width="15px"/>
                            </p>
                            <p>{athlete.group_id}</p>
                            <p>{athlete.email}</p>
                            </div>
                            <div  className={classes.right}>
                            <p>Возраст: 20</p>
                            <p>Рост: 185</p>
                            <p>Вес: 80</p>
                            </div>
                        </div>
                    </div>
                        <EventsWindow />
                        <MeasurementWindow />
                        <TestsWindow />
                    </div>
                </Tab>
                <Tab className={classes.calendar} eventKey="calendar" title="Календарь тренировок">
                    <TrPage />
                </Tab>
                <Tab eventKey="analytics" title="Аналитика">
                    
                </Tab>
            </Tabs>
            </div>
    
        <div className={classes.sidebar}> 
             <Tabs className="justify-content-center" defaultActiveKey="groups" id="uncontrolled-tab-example">
                <Tab eventKey="groups" title="Группы">
                    <GroupList />
                    
                </Tab>
                <Tab eventKey="athletes" title="Спортсмены">
                    <AthletesList />
                </Tab>
            </Tabs>
            </div>
            </div>     
    )
    
}
}

export default SportsmanPage