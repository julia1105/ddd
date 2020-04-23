import React from 'react';
import Query from 'devextreme/data/query';

import { data } from './data.js';
import classes from './TrPage.module.css';

function getTrById(id) {
  return Query(data).filter(['id', id]).toArray()[0];
}

export default class AppointmentTooltipTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trData: getTrById(props.model.appointmentData.id)
    };
 
  }

  render() {
    const { trData } = this.state;
    return (
      <div className={classes.training_tooltip}>
        <div className={classes.training_info}>
          <div className={classes.training_title}>
            {trData.text}  ({trData.typet})
          </div>
          <div>
            Продолжительность: {trData.duration} минут
          </div>
          <div>
            Упражнения: {trData.exsercise} 
          </div>
        </div>
      </div>
    );
  }
}