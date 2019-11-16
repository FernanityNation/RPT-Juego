import React from 'react'

import classes from './CardItem.module.css'


const cardItem = props => (
    <div className={classes.CardItem}>
        {props.children}
    </div>
)

export default cardItem