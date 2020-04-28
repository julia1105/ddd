import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';
import axios from 'axios'

import classes from './Analythics.module.css'

const data = {
    labels: [ '04.03.2020', '12.05.2020', '22.03.2020'],
    datasets: [
      {
        label: 'Вес',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80]
      }
    ]
  };



class Analythics extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
         measures: [],
         tests: []
         };
      }

      componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id
              
              axios.get(`/api/listPartParameter/${id}`)
              .then(res => {
                console.log(res);
                this.setState({
                    measures: res.data
                });
              })
              .catch(function (error) {
                console.log(error.response);
              });

            }     
        }

    render() {
        const { measures } = this.state;
        return (
            <div className={classes.Analythics}>
                <div>
                <h1>Analythics</h1>
                </div>
                <div className={classes.chart}>
                <Line data={data} />
                console.log({measures})
                </div>
            </div>
        )
    }
}

export default Analythics