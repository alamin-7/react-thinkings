import React from 'react';
import ReactDOM from "react-dom" 
import { Fragment } from 'react';

import classes from './Modal.module.css';

const Backdrop = (props) =>{
    return<div className={classes.backdrop} />
    
};

const ModalOverlay = (props) =>{
    return (
         <div className={classes.modal} onClick={props.onClose}>
            <div className={classes.content}>{props.children}</div>
         </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
    );
};

export default Modal;
