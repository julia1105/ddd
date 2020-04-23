import React from 'react'
import { Col} from 'react-bootstrap';
import classes from './Event.module.css'

const Event = ({event, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteEvent}>
            <img className={classes.delete_icon} src="https://icon-icons.com/icons2/950/PNG/256/cross-symbol_icon-icons.com_74149.png" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );

      const value = event.startDate;

    return (

        <div className = {classes.event}>
            <Col sm={6} className="p-0">{new Date(value).toLocaleDateString()}</Col>
            <Col sm={5} >{event.text}</Col>
            <Col ><ActionBtn /></Col>
        </div>
    )
}

export default Event