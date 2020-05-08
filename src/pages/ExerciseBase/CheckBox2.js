import React, { useState } from 'react'
import {Checkbox, Collapse} from 'antd'
import classes from './CheckBox.module.css'

const {Panel} = Collapse

const muscles = [
    {
        "_id": 1,
        "name": "Шея"
    },
    {
        "_id": 2,
        "name": "Плечи"
    },
    {
        "_id": 3,
        "name": "Бицепс"
    },
    {
        "_id": 4,
        "name": "Трицепс"
    },
    {
        "_id": 5,
        "name": "Широчайшие"
    },
    {
        "_id": 6,
        "name": "Предплечья"
    },
    {
        "_id": 7,
        "name": "Грудь"
    },
    {
        "_id": 8,
        "name": "Пресс"
    },
    {
        "_id": 9,
        "name": "Бедра"
    },
    {
        "_id": 10,
        "name": "Ягодицы"
    },
    {
        "_id": 11,
        "name": "Квадрицепсы"
    },
    {
        "_id": 12,
        "name": "Икры"
    }
]


function ChckBox2(props) {

const [Checked, setChecked] = useState([])

const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    props.handleFilters(newChecked)
    //update this checked information into Parent Component 
}

    const renderCheckboxLists = () => muscles.map((value, index) => (
        <React.Fragment key={index}>
            <div >
             <Checkbox 
                        onChange={()=>handleToggle(value._id)}
                        type="checkbox"
                        checked={Checked.indexOf(value._id) === -1 ? false : true}
                        />

            <span  classname = {classes.chk}>{value.name}</span>
            </div>
        </React.Fragment>
    ))

    return (
        <div>
           
               <Collapse defaultActiveKey={['1']}>
               <Panel classname = {classes.ch_text} header="Целевые мышцы" key="1">
                {renderCheckboxLists()}
                </Panel>
                </Collapse>
         
        </div>
    )
}

export default ChckBox2