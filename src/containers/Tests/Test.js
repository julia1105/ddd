import React from 'react'
import {Col} from 'react-bootstrap';

import classes from './Test.module.css'

const Test = ({test, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteTest}>
            <img className={classes.delete_icon} src="https://icon-icons.com/icons2/950/PNG/256/cross-symbol_icon-icons.com_74149.png" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.test}>
            
            <Col sm={4}>{test.date}</Col>
            <Col sm={4}>{test.text}</Col>
            <Col sm={3}>{test.mark}</Col>
            <Col><ActionBtn /></Col>   
        </div>
    )
}

export default Test