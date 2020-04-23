import React from 'react'
import { Col} from 'react-bootstrap';
import classes from './Measurement.module.css'

const Measurement = ({measure, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteMeasure}>
            <img className={classes.delete_icon} src="https://icon-icons.com/icons2/950/PNG/256/cross-symbol_icon-icons.com_74149.png" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.measure}>
            <Col sm={4}>{measure.data}</Col>
            <Col sm={4}>{measure.measure}</Col>
            <Col sm={3} >{measure.value}</Col>
            <Col><ActionBtn /></Col>
        </div>
    )
}

export default Measurement