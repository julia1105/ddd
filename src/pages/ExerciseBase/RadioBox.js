import React, { useState } from 'react'
import {Radio, Collapse} from 'antd'
import classes from './CheckBox.module.css'

const {Panel} = Collapse

const types = [
    {
        "_id": 0,
        "name": "Базовое"
    },
    {
        "_id": 1,
        "name": "Изолирующее"
    },
]

const renderRadioBox = () => {
    types.map((value) => (
    <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio>
    ))
}

function RadioBox(props) {


    return (
        <div>
           <Collapse defaultActiveKey={['1']}>
               <Panel header="Типы упражнений" key="1">
                    <Radio.Group onChange>
                        {renderRadioBox}
                    </Radio.Group>
                </Panel>
                </Collapse>
        </div>
    )
}

export default RadioBox