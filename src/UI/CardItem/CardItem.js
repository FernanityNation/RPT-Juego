import React from 'react'

import classes from './CardItem.module.css'


const cardItem = props => {
    let customClasses = [classes.CardItem]
    if (props.selected)
        customClasses.push(classes.CardSelected)


    return (
        <div className={classes.cardOption}>
            <div className={customClasses.join(' ')}>
                {props.children}
            </div>
            {props.cardAction}
        </div>
    )
}

export default cardItem