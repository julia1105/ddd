import React, {Component} from 'react'

import classes from './ModalWindow.module.css'

 class ModalWindow extends Component {
    render() {
        let modal = (
            <div className={classes.Modal_window}>
                <button className={classes.Modal_button} onClick={this.props.onClose}>x</button>
                <div>
                    {this.props.children}
                </div>
            </div>
        );

        if (!this.props.isOpen)
        {
            modal = null;
        }
        return (
            <div>
                {modal}
            </div>
        )
    }
}

export default ModalWindow