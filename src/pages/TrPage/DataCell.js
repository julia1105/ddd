import React from 'react';

function isWeekEnd(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function getCurrentTraining(date) {
  const result = date  % 3;
  const currentTraining = `training-background-${result}`;

  return currentTraining;
}

class DataCell extends React.PureComponent {

  render() {
    const { data: { startDate, type , text } } = this.props;
    const dayClasses = [
      `day-cell`,
      getCurrentTraining(startDate.getDate())
    ];

    const typeClasses = [ `type-${type}`, 'dx-template-wrapper' ];

    if (isWeekEnd(startDate)) {
      typeClasses.push(`employee-weekend-1`);
    }

    return (
      <div className={typeClasses.join(' ')}>
        <div className={dayClasses.join(' ')}>
          {text}
        </div>
      </div>
    );
  }
}

export default DataCell;
