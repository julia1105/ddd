import React from 'react'
import classes from './Athlete.module.css'
import { NavLink } from 'react-router-dom';

const Athlete = ({athlete, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteAthlete}>
            <img className={classes.delete_icon} src="https://icon-icons.com/icons2/950/PNG/256/cross-symbol_icon-icons.com_74149.png" alt="Add icon"  height="15px" width="15px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.athlete}>
            <NavLink to={'/sportsman/' + athlete.participant_id}>
            <p>{athlete.name} {athlete.surname}</p>
            </NavLink>
            <ActionBtn />
            
        </div>
    )
}

export default Athlete