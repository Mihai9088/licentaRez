import React from 'react'
import classes from './Modal.module.css'
import {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.conent}>
            {props.children}
        </div>
    </div>
}

const portalHelper = document.getElementById('overlays')

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalHelper)}
        {
            ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalHelper
            )
        }
    </Fragment>
}

export default Modal