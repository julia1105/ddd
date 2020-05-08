import React, { Component } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import Query from 'devextreme/data/query';
import axios from 'axios'

import AppointmentTemplate from './AppointmentTemplate.js';
import AppointmentTooltipTemplate from './AppointmentTooltipTemplate';
import DataCell from './DataCell.js';
import { data, typeData} from './data.js';

import { locale, loadMessages, formatMessage } from "devextreme/localization";
import * as ruMessages from 'devextreme/localization/messages/ru.json';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './style.css'
import service from './data.js';

const views = ['month'];

class TrPage extends Component {
  constructor(props) {
    super(props);
    loadMessages(ruMessages);
    locale(navigator.language);
    this.state = {
      scheduler: null,
      locale: 'ru',
      records: [],
      trainings: []
    };
    
    loadMessages({
      "en": {
          "dxScheduler-switcherMonth": "Месяц",
          "Cancel": "Отмена",
          "dxCalendar-todayButtonText": "Сегодня",
          "dxScheduler-editorLabelStartDate": "Дата начала",
          "dxScheduler-editorLabelEndDate": "Дата завершения"
      }
  });
    this.getAppointmentTooltipTemplate = this.getAppointmentTooltipTemplate.bind(this);
    this.onAppointmentFormOpening = this.onAppointmentFormOpening.bind(this);
    this.onContentReady = this.onContentReady.bind(this);
  }

  componentDidMount() {
    axios.get('/api/listTrain').then(res => {
        console.log(res);
        this.setState({trainings: res.data})
    })
}

  render() {

    return (
      <Scheduler
        dataSource={data}
        dataCellComponent={DataCell}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={new Date()}
        height={760}
        width={1540}
        showAllDayPanel={false}
        firstDayOfWeek={1}
        startDayHour={8}
        endDayHour={18}
        timeZone = "Asia/Krasnoyarsk"
        appointmentTooltipRender={this.getAppointmentTooltipTemplate}
        appointmentRender={AppointmentTemplate}
        onContentReady={this.onContentReady}
        editing={ {allowAdding: true, 
                  allowDeleting: true, 
                  allowEditing: true}     
      }
        onAppointmentFormOpening={this.onAppointmentFormOpening}
      >
        <Resource
          fieldExpr="type"
          allowMultiple={false}
          dataSource={typeData}
          label="Type"
          useColorAsDefault={ true }
        />
      </Scheduler>
    );
  }

  getAppointmentTooltipTemplate(model) {
  return <AppointmentTooltipTemplate model={model} scheduler={this.state.scheduler} />;
  }
  onContentReady(e) {
    this.state.scheduler === null && this.setState({ scheduler: e.component });
  }

  onAppointmentFormOpening(data) {
    const { trainings } = this.state;
    let form = data.form,
      trInfo = getTrById(data.appointmentData.trId) || {},
      startDate = data.appointmentData.startDate;

    form.option('items', [{
      label: {
        text: 'Название тренировки'
      },
      editorType: 'dxSelectBox',
      dataField: 'id',
      colSpan: 2,
      validationRules: [{
        type: 'required',
        message: 'Необходимо выбрать тренировку из списка'
    }],
      editorOptions: {
        items: trainings,
        displayExpr: 'name',
        valueExpr: 'id',
        searchEnabled: true,
        acceptCustomValue: true
      }
    },
    
    {
      label: {
        text: 'Дата проведения'
      },
      dataField: 'startDate',
      colSpan: 2,
      editorType: 'dxDateBox',
      editorOptions: {
        type: 'datetime',
        dateSerializationFormat: 'yyyy-MM-ddTHH:mm',
        }
    }, 
    
    {
      label: {
        text: 'Окончание'
      },
      name: 'endDate',
      dataField: 'endDate',
      colSpan: 2,
      editorType: 'dxDateBox',
      editorOptions: {
        type: 'datetime',
        dateSerializationFormat: 'yyyy-MM-ddTHH:mm',
      }
    } 
    ]);
  }
}

function getTrById(id) {
  return Query(data).filter(['id', id]).toArray()[0];
}
export default TrPage;
