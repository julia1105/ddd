import React, { Component } from 'react'
import GroupList from '../../containers/GroupList'
import AthletesList from '../../containers/AthletesList'
import TrPage from '../TrPage/TrPage'
import { Tabs, Tab } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';
import axios from 'axios'

import Measurement from '../../containers/MeasurementWindow/Measurement'
import AddMeasurement from '../../containers/MeasurementWindow/AddMeasurement'
import Event from '../../containers/Events/Event'
import AddEvent from '../../containers/Events/AddEvent'
import Test from '../../containers/Tests/Test'
import AddTest from '../../containers/Tests/AddTest'

import classes from './SportsmanPage.module.css'
import Analythics from '../Analythics/Analythics'

const data = {
  labels: ['04.03.2020', '22.03.2020', '12.04.2020'],
  datasets: [
    {
      label: 'Вес',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80]
    }
  ]
};


class SportsmanPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      athlete: [],
      measures: [],
      tests: [],
      events: [],
      groups: [],
      group: []
    };
  }

  addEvent = (startData, definition) => {

    const v = startData;
    const date = new Date(v).toLocaleDateString()

    if (this.props.match && this.props.match.params.id) {
      const id = this.props.match.params.id

      axios.post(`/api/newEvent/${id}`,
        {
          data: date,
          definition: definition
        })
        .then(res => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    }

    this.setState(state => {
      let { events } = state;
      events.push({
        id: events.length !== 0 ? events.length : 0,
        data: date,
        definition: definition
      });
      return events;
    });
  };

  deleteEvent = (event_id) => {
    axios.delete(`/api/delEvent/${event_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ events }) => {
        const newEvents = events.filter(el => el.event_id !== event_id);
        return {events: newEvents};
      });
  }

  addTest = (startData, test, value) => {

    const v = startData;
    const date = new Date(v).toLocaleDateString()

    if (this.props.match && this.props.match.params.id) {
      const id = this.props.match.params.id

      axios.post(`/api/newStandart/${id}`,
        {
          data: date,
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

    this.setState(state => {
      let { tests } = state;
      tests.push({
        id: tests.length !== 0 ? tests.length : 0,
        data: date,
        test: test,
        value: value
      });
      return tests;
    });
  };

  deleteTest = (standart_id) => {

    axios.delete(`/api/delStandart/${standart_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ tests }) => {
        const newTests = tests.filter(el => el.standart_id !== standart_id);
        return {tests: newTests};
      });
    }


  addMeasure = (startData, measure, value) => {
    this.setState(state => {
      let { measures } = state;

      const v = startData;
      const date = new Date(v).toLocaleDateString()

      if (this.props.match && this.props.match.params.id) {
        const id = this.props.match.params.id

        axios.post(`/api/newParameter/${id}`,
          {
            data: date,
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

  deleteMeasure = (param_id) => {

    axios.delete(`/api/delParameter/${param_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      this.setState(({ measures }) => {
        const newMeasures = measures.filter(el => el.param_id !== param_id);
        return {measures: newMeasures};
      });
  }

  componentDidMount() {
    axios.get('/api/groupList').then(res => {
      console.log(res);
      this.setState({groups: res.data})
  })

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

        axios.get(`/api/listPartEvent/${id}`)
        .then(res => {
          console.log(res);
          this.setState({
            events: res.data
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

  render() {
    const { measures } = this.state;
    const { athlete } = this.state;
    const { tests } = this.state;
    const { events } = this.state;
    const { groups } = this.state;

    return (
      <div>
        <div className={classes.main_tab}>
          <Tabs className="justify-content-center" defaultActiveKey="info" id="uncontrolled-tab-example">
            <Tab eventKey="info" title="Информация о спортсмене">
              <div className={classes.inf_sp}>
                <div className={classes.profile_info}>
                  <div className={classes.img}>
                    <img src="https://img.icons8.com/ios-filled/90/000000/user-male-circle.png" alt="Profile icon" />
                  </div>
                  <div className={classes.info}>
                    <div className={classes.left}>
                      <h5 className={classes.h5}>{athlete.name} {athlete.surname}
                        <img className={classes.edit_icon} src="https://image.flaticon.com/icons/svg/1250/1250925.svg" alt="Edit icon" height="15px" width="15px" />
                      </h5>
                      <p>Группа: Group 1</p>
                      <p>{athlete.email}</p>
                    </div>
                    <div className={classes.right}>
                      <p>Дата рождения: {athlete.age}</p>
                      <p>Рост: {athlete.heigth}</p>
                      <p>Вес: {athlete.weigth}</p>
                    </div>
                  </div>
                </div>

                  <div>
                  <div className={classes.eventt}>
                    <div className={classes.nav_line1}>
                      Близжайшие события
                      <AddEvent addEvent={this.addEvent}>
                      </AddEvent>

                    </div>
                    <Container>
                      <Row>
                        <Col sm={4} className={classes.table_header1}>ДАТА</Col>
                        <Col sm={7 }className={classes.table_header1}>НАЗВАНИЕ</Col>
                      </Row>
                      <hr className={classes.table_hr1} />
                      <div className={classes.table_scroll1}>

                        {events.map(event => (
                          <Event
                            deleteEvent={() => this.deleteEvent(event.event_id)}
                            event={event} key={event.id}>
                          </Event>
                        ))
                        }
                      </div>
                    </Container>
                  </div>
                  </div>
                

                <div>
                  <div className={classes.measurement}>
                    <div className={classes.nav_line}>
                      История измерений
                        <AddMeasurement addMeasure={this.addMeasure}>
                      </AddMeasurement>

                    </div>
                    <Container>
                      <Row>
                        <Col sm={4} className={classes.table_header}>ДАТА ИЗМЕРЕНИЯ</Col>
                        <Col sm={4} className={classes.table_header}>ИЗМЕРЕНИЕ</Col>
                        <Col sm={3} className={classes.table_header}>ПОКАЗАТЕЛЬ</Col>
                      </Row>
                      <hr className={classes.table_hr} />
                      <div className={classes.table_scroll}>
                        {measures.map(measure => (
                          <Measurement
                            deleteMeasure={() => this.deleteMeasure(measure.param_id)}
                            measure={measure} key={measure.id}>
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
                      История нормативов
                        <AddTest addTest={this.addTest}>
                      </AddTest>

                    </div>
                    <Container>
                      <Row>
                        <Col sm={4} className={classes.table_header}>ДАТА ИЗМЕРЕНИЯ</Col>
                        <Col sm={4} className={classes.table_header}>НОРМАТИВ</Col>
                        <Col sm={3} className={classes.table_header}>ПОКАЗАТЕЛЬ</Col>
                      </Row>
                      <hr className={classes.table_hr} />

                      <div className={classes.table_scroll}>
                        {tests.map(test => (
                          <Test
                            deleteTest={() => this.deleteTest(test.standart_id)}
                            test={test} key={test.id}>
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
              <div className={classes.inf_sp}>
                <div className={classes.Analythics}>
                  <div>
                    <div className={classes.select}>
                    <label className={classes.label1}>Показатель:</label>
                      <select className={classes.select_box} name="" value={this.state.sex} onChange={this.inputChange}>
                        <option className={classes.options_container} value="мужчина">Вес</option>
                        <option className={classes.options_container} value="женщина">Рост</option>
                        <option className={classes.options_container} value="женщина">Процент жировой массы</option>
                        <option className={classes.options_container} value="женщина">Средний пульс в покое</option>
                        <option className={classes.options_container} value="женщина">Максимальный пульс</option>
                        <option className={classes.options_container} value="женщина">Вариабельность пульса</option>
                      </select>
                    
                    </div>
                  </div>
                  <div className={classes.chart}>
                    <Line data={data} />

                  </div>
                </div>
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

export default SportsmanPage