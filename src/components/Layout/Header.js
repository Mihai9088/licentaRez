import React from 'react'
import {Fragment} from 'react'
import bgImage from '../../assets/bg.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Electronics Shop</h1>
            <HeaderCartButton onClick ={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={bgImage}/>
        </div>
    </Fragment>

}

export default Header