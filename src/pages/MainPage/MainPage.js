import React, {Component} from 'react'
import GroupList from '../../containers/GroupList'
import AthletesList from '../../containers/AthletesList'
import TrPage from '../TrPage/TrPage'
import { Tabs, Tab, Nav } from 'react-bootstrap';


import classes from './MainPage.module.css'
import InfoAthletes from '../../containers/InfoAthletes';


class MainPage extends Component {

    state = {
        isOpen: false
    }


render(){
    return (
        <div>
            <div className={classes.main_tab}>
            <Tabs className="justify-content-center" defaultActiveKey="info" id="uncontrolled-tab-example">
                <Tab eventKey="info" title="Информация о спортсмене">
                   
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

export default MainPage