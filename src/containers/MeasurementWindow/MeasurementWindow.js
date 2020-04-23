import React, { Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Measurement from './Measurement'
import AddMeasurement from './AddMeasurement'

import 'rodal/lib/rodal.css';
import classes from './Measurement.module.css'

class MeasurementWindow extends Component{

  constructor() {
    super()

    this.state = { 
      measures: [
          {id:0, startDate: '12.04.2020', text: 'Вес', mark: '58'},
          {id:1, startDate: '11.04.2020', text: 'Процент жира', mark: '18'}
      ]
     }
  }

  addMeasure = (startDate, text, mark) => {
    this.setState(state=> {
        let {measures} = state;
        measures.push({
            id: measures.length !== 0 ? measures.length : 0,
            startDate: startDate,
            text: text,
            mark: mark
        });
        return measures;
    });
};

  deleteMeasure = id => {
    const index = this.state.measures.map(measure => measure.id).indexOf(id);
    this.setState( state => {
        let {measures} = state;
        delete measures[index];
        return measures;
    })
}
  
      render() {
        const { measures } = this.state;

        return(
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
                            deleteMeasure = {() => this.deleteMeasure(measure.id)}
                            measure = {measure} key={measure.id}>
                        </Measurement>
                        ))
                    }
                    </div>
                    </Container>
                   
                </div>
            </div>
        )
      }
    }

    export default MeasurementWindow;