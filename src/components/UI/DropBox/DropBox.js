import React, { useContext } from 'react'

import classes from './DropBox.module.css'

export const DropBox = () => {
    
        return (
            <div className={classes.DropBox}>      
            <select>
                <option value="Женщины кандидаты">Женщины кандидаты</option>
                <option value="Мужчины кандидаты">Мужчины кандидаты</option>
                <option selected value="Юниоры">Юниоры</option>    
            </select>
            </div>  
        ) 
    }














