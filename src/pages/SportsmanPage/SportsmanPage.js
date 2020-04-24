import React, {Component} from 'react'
import GroupList from '../../containers/GroupList'
import AthletesList from '../../containers/AthletesList'
import TrPage from '../TrPage/TrPage'
import { Tabs, Tab } from 'react-bootstrap'
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {Line} from 'react-chartjs-2'

import Measurement from '../../containers/MeasurementWindow/Measurement'
import AddMeasurement from '../../containers/MeasurementWindow/AddMeasurement'
import EventsWindow from '../../containers/Events/EventsWindow'
import Test from '../../containers/Tests/Test'
import AddTest from '../../containers/Tests/AddTest'

import classes from './SportsmanPage.module.css'




class SportsmanPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            athlete: [],
         measures: [],
         tests: []
         };
      }

      addTest = (startData, test, value) => {

        const v = startData;
        const date = new Date(v).toLocaleDateString()
        
        const testt = {
            data: date,
            test: test,
            value: value,
          };

          alert(testt.data + testt.measure + testt.value)

              if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
            alert(id)
              axios.post(`/api/newStandart/${id}`, 
              { data: date,
                test: test,
                value: value
            })
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });
                }

        this.setState(state=> {
            let {tests} = state;
            tests.push({
                id: tests.length !== 0 ? tests.length : 0,
                data: date,
                test: test,
                value: value
            });
            return tests;
        });
    };
    
      deleteTest = id => {
        const index = this.state.tests.map(test => test.id).indexOf(id);

        axios.delete(`/api/delStandart/${id}`)
        .then(res => {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error.response);
        });

        this.setState( state => {
            let {tests} = state;
            delete tests[index];
            return tests;
        })
    }

      addMeasure = (startData, measure, value) => {
        this.setState(state=> {
            let {measures} = state;

            const v = startData;
            const date = new Date(v).toLocaleDateString()

            const measur = {
                data: date,
                measure: measure,
                value: value,
              };

              alert(measur.data + measur.measure + measur.value)

              if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
            alert(id)
              axios.post(`/api/newParameter/${id}`, 
              { data: date,
                measure: measure,
                value: value
            })
                    .then(res => {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error.response);
                  });
                }

            measures.push({
                id: measures.length !== 0 ? measures.length : 0,
                data: date,
                measure: measure,
                value: value
            });
            return measures;
        });
    };
    
      deleteMeasure = id => {
        const index = this.state.measures.map(measure => measure.id).indexOf(id);

        axios.delete(`/api/delParameter/${id}`)
        .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

        this.setState( state => {
            let {measures} = state;
            delete measures[index];
            return measures;
        })
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

              axios.get(`/api/listPartParameter/${id}`)
              .then(res => {
                console.log(res);
                this.setState({
                    measures: res.data
                });
              })
              .catch(function (error) {
                console.log(error.response);
              });

              axios.get(`/api/listPartStandart/${id}`)
              .then(res => {
                console.log(res);
                this.setState({
                    tests: res.data
                });
              })
              .catch(function (error) {
                console.log(error.response);
              });
            }     
        }

render(){
    const { measures } = this.state;
    const { athlete } = this.state;
    const { tests } = this.state;

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

                        <div>
                <div className={classes.measurement}>
                <div className={classes.nav_line}>
                        История измерений 
                        <AddMeasurement addMeasure = {this.addMeasure}>
                            </AddMeasurement>
                       
                    </div>
                    <Container>
                        <Row>
                        <Col sm={4} className={classes.table_header}>ДАТА ИЗМЕРЕНИЯ</Col>
                        <Col sm={4} className={classes.table_header}>ИЗМЕРЕНИЕ</Col>
                        <Col sm={3} className={classes.table_header}>ПОКАЗАТЕЛЬ</Col>
                        </Row>
                        <hr className={classes.table_hr}/>
                        <div className={classes.table_scroll}>
                        {measures.map(measure =>(
                        <Measurement 
                            deleteMeasure = {() => this.deleteMeasure(measure.param_id)}
                            measure = {measure} key={measure.id}>
                        </Measurement>
                        ))
                    }
                    </div>
                    </Container> 
                </div>
            </div>
                       
            <div>
                <div className={classes.test_main}>
                <div className={classes.nav_line}>
                        История тестов
                        <AddTest addTest = {this.addTest}>
                            </AddTest>
                       
                    </div>
                    <Container>
                        <Row>
                        <Col sm={4} className={classes.table_header}>ДАТА ИЗМЕРЕНИЯ</Col>
                        <Col sm={4} className={classes.table_header}>ТЕСТ</Col>
                        <Col sm={3} className={classes.table_header}>ПОКАЗАТЕЛЬ</Col>
                        </Row>
                        <hr className={classes.table_hr}/>
                       
                        <div className={classes.table_scroll}>
                        {tests.map(test =>(
                        <Test 
                            deleteTest = {() => this.deleteTest(test.standart_id)}
                            test = {test} key={test.id}>
                        </Test>
                        ))
                    }
                    </div>
                  
                    </Container>
                   
                </div>
            </div>


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