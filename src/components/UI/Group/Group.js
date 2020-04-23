import React from 'react'
import classes from './Group.module.css'

const Group = ({group, ...props}) => {
    const ActionBtn = () => (
        <div className={classes.action_btn}>
         
            <span aria-label="delete" role="img" onClick={props.deleteGroup}>
            <img className={classes.delete_icon} src="https://icon-icons.com/icons2/950/PNG/256/cross-symbol_icon-icons.com_74149.png" alt="Add icon"  height="15px" width="15px"/>
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