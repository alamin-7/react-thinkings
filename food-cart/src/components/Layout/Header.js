import React, { Fragment } from "react"

import mealsImg from '../../assets/test.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) =>{
    return (
    <Fragment>
    <header className={classes.header}>
        <h1>Bangali khabar</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImg}/>
    </div>
    </Fragment>
    );
}

export default Header;