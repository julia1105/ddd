import React from 'react'
import classes from './Group.module.css'

const Group = ({group, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteGroup}>
            <img className={classes.delete_icon} src="https://image.flaticon.com/icons/svg/447/447047.svg" alt="Add icon"  height="12px" width="12px"/>
            </span>
          
        </div>
      );

    return (
        <div className = {classes.group}>
            <p>{group.title}</p>
            <ActionBtn />
            
        </div>
    )
}

export default Group