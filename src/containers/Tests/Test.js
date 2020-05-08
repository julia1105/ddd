import React from 'react'
import {Col} from 'react-bootstrap';

import classes from './Test.module.css'

const Test = ({test, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteTest}>
            <img className={classes.delete_icon} src="https://image.flaticon.com/icons/svg/447/447047.svg" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.test}>
            <Col sm={4}>{test.data}</Col>
            <Col sm={4}>{test.test}</Col>
            <Col sm={3}>{test.value}</Col>
            <Col><ActionBtn /></Col>   
        </div>
    )
}

export default Test