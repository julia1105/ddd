import React from 'react'
import classes from './Athlete.module.css'
import { NavLink } from 'react-router-dom';

const Athlete = ({athlete, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteAthlete}>
            <img className={classes.delete_icon} src="https://image.flaticon.com/icons/svg/447/447047.svg" alt="Add icon"  height="12px" width="12px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.athlete}>
            <NavLink to={'/sportsman/' + athlete.participant_id} className = {classes.athlete_name}>
            <p>{athlete.name} {athlete.surname}</p>
            </NavLink>
            <ActionBtn />
            
        </div>
    )
}

export default Athlete