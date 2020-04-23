import React, { Component} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Event from './Event'
import AddEvent from './AddEvent'

import classes from './Event.module.css'

class EventWindow extends Component{

  constructor() {
    super()

    this.state = { 
        events: [
          {id:0, startDate: '12/04/2020', text: 'Марафон 1'},
          {id:1, startDate: '11/04/2020', text: 'Марафон 2'}
      ]
     }
  }

  addEvent = (startDate, text) => {
    this.setState(state=> {
        let {events} = state;
        events.push({
            id: events.length !== 0 ? events.length : 0,
            startDate: startDate,
            text: text
        });
        return events;
    });
};

  deleteEvent = id => {
    const index = this.state.events.map(event => event.id).indexOf(id);
    this.setState( state => {
        let {events} = state;
        delete events[index];
        return events;
    })
}
  
      render() {
        const { events } = this.state;

        return(
            <div>
                <div className={classes.event_main}>
                <div className={classes.nav_line}>
                Близжайшие события
                        <AddEvent addEvent = {this.addEvent}>
                            </AddEvent>
                       
                    </div>
                    <Container>
                        <Row>
                        <Col className={classes.table_header}>ДАТА</Col>
                        <Col className={classes.table_header}>НАЗВАНИЕ</Col>
                        </Row>
                        <hr className={classes.table_hr}/>
                        <div className={classes.table_scroll}>
                        
                        {events.map(event =>(
                        <Event 
                        deleteEvent = {() => this.deleteEvent(event.id)}
                            event = {event} key={event.id}>
                        </Event>
                        ))
                    }
                    </div>
                    </Container>
                   
                </div>
            </div>
        )
      }
    }

    export default EventWindow;