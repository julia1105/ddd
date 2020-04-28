import React, { useState } from 'react'
import {Checkbox, Collapse} from 'antd'
import classes from './CheckBox.module.css'

const {Panel} = Collapse

const types = [
    {
        "_id": 1,
        "name": "Кардио"
    },
    {
        "_id": 2,
        "name": "Силовая"
    },
    {
        "_id": 2,
        "name": "На выносливость"
    },
    {
        "_id": 2,
        "name": "На скорость"
    },
]


function ChckBox(props) {

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

    const renderCheckboxLists = () => types.map((value, index) => (
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
               <Panel header="Типы тренировки" key="1">
                {renderCheckboxLists()}
                </Panel>
                </Collapse>
                
        </div>
    )
}

export default ChckBox