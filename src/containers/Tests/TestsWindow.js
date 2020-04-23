import React, { Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Test from './Test'
import AddTest from './AddTest'

import classes from './Test.module.css'

class TestsWindow extends Component{

  constructor() {
    super()

    this.state = { 
      tests: [
          {id:0, date: '12.04.2020', text: 'Вес', mark: 20},
          {id:1, date: '11.04.2020', text: 'Процент жира', mark: 35}
      ]
     }
  }

  addTest = (date, text, mark) => {
    this.setState(state=> {
        let {tests} = state;
        tests.push({
            id: tests.length !== 0 ? tests.length : 0,
            date: date,
            text: text,
            mark: mark
        });
        return tests;
    });
};

  deleteTest = id => {
    const index = this.state.tests.map(test => test.id).indexOf(id);
    this.setState( state => {
        let {tests} = state;
        delete tests[index];
        return tests;
    })
}
  
      render() {
        const { tests } = this.state;

        return(
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
                            deleteTest = {() => this.deleteTest(test.id)}
                            test = {test} key={test.id}>
                        </Test>
                        ))
                    }
                    </div>
                  
                    </Container>
                   
                </div>
            </div>
        )
      }
    }

    export default TestsWindow;