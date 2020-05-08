import React, {Component} from 'react'
import GroupList from '../../containers/GroupList'
import AthletesList from '../../containers/AthletesList'
import { Tabs, Tab } from 'react-bootstrap';


import classes from './MainPage.module.css'

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
                <div className={classes.inf_sp}>
                   <h3 className={classes.h3}>Выберите спортсмена из списка для отображения информации</h3>
                   </div>
                </Tab>
                <Tab  eventKey="calendar" title="Календарь тренировок">
                <div className={classes.inf_sp}>
                   <h3 className={classes.h3}>Выберите спортсмена из списка для отображения информации</h3>
                   </div>
                </Tab>
                <Tab eventKey="analytics" title="Аналитика">
                <div className={classes.inf_sp}>
                   <h3 className={classes.h3}>Выберите спортсмена из списка для отображения информации</h3>
                   </div>
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