import React from 'react';
import Query from 'devextreme/data/query';

import { data } from './data.js';
import classes from './TrPage.module.css';

function getTrById(id) {
  return Query(data).filter(['id', id]).toArray()[0];
}

export default function AppointmentTemplate(model) {
  const trData = getTrById(model.appointmentData.id) || {};
  return (
    <div className={classes.showtime_preview}>
      <div> {trData.text}</div>
      <div> {trData.typet}</div>
      <div>
      </div>
    </div>
  );
}
