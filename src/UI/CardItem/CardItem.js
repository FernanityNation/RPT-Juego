import React from 'react'

import classes from './CardItem.module.css'


const cardItem = props => (
    <div className={classes.cardOption}>
        <div className={classes.CardItem}>
            {props.children}
        </div>
        {props.cardAction}
    </div>
    
)

export default cardItem