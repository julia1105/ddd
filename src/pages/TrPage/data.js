export const typeData = [{
    text : 'Кардио',
    id: 1,
    color: '#FF00AE'
  },
  {
    text : 'Силовая',
    id: 2,
    color: '#00FFA9'
  },
  {
    text : 'На выносливость',
    id: 3,
    color: '#B34EE9'
  }
];
  
  export const data = [{
    id: 1,
    text: 'Тренировка 1',
    type: 1,
    typet: 'Кардио',
    duration: 60,
    exsercise: ['1', '2', '3'],
    startDate: new Date(2020, 3, 2, 9, 30),
    endDate: new Date(2020, 3, 2, 11, 30)
  }, {
    id: 2,
    text: 'Тренировка 2',
    type: 2,
    typet: 'Силовая',
    duration: 50,
    exsercise: ['2', '2', '3'],
    startDate: new Date(2020, 3, 10, 9, 30),
    endDate: new Date(2020, 3, 10, 11, 30)
  }, 
   {
    id: 3,
    text: 'Тренировка 3',
    type: 3,
    typet: 'На выносливость',
    duration: 45,
    exsercise: ['1', '3', '2'],
    startDate: new Date(2020, 3, 25, 10, 30),
    endDate: new Date(2020, 3, 25, 11, 30)
  },
  {
    id: 3,
    text: 'Тренировка 4',
    type: 3,
    typet: 'На выносливость',
    duration: 45,
    exsercise: ['1', '3', '2'],
    startDate: new Date(2020, 4, 12, 10, 30),
    endDate: new Date(2020, 4, 12, 11, 30)
  },
  {
    id: 3,
    text: 'Тренировка 5',
    type: 1,
    typet: 'На выносливость',
    duration: 45,
    exsercise: ['1', '3', '2'],
    startDate: new Date(2020, 4, 24, 10, 30),
    endDate: new Date(2020, 4, 24, 11, 30)
  }];
  
  const locales = [
    {
      'Name': 'Русский',
      'Value': 'ru'
    }
  ];
  
  const dictionary = {
    'ru': {
      'Month': 'Месяц',
      'Contact': 'Имя',
      'Company': 'Организация',
      'Amount': 'Сумма',
      'PaymentDate': 'Дата оплаты'
    }
  };

  export default {
    getLocales() {
      return locales;
    },
    getDictionary() {
      return dictionary;
    }
  };
  