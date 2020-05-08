import React from 'react'
import { Col} from 'react-bootstrap';
import classes from './Event.module.css'

const Event = ({event, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteEvent}>
            <img className={classes.delete_icon} src="https://image.flaticon.com/icons/svg/447/447047.svg" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );


    return (
        <div className = {classes.event}>
            <Col sm={4} className="p-0">{event.data}</Col>
            <Col sm={7} >{event.definition}</Col>
            <Col ><ActionBtn /></Col>
        </div>
    )
}

export default Event