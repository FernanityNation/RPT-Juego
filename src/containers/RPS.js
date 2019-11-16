import React from 'react'

import classes from './RPS.module.css'

import CardRow from '../UI/CardRow/CardRow'
import CardItem from '../UI/CardItem/CardItem'

import ic_rock from '../images/ic_rock.png'
import ic_paper from '../images/ic_paper.png'
import ic_scissor from '../images/ic_scissor.png'

export default class RPS extends React.Component {
    
    render() {
        return (
            <div className={classes.RPS}>
                <CardRow>
                    <CardItem>
                        <img src={ic_rock} alt='Rock' title='Choose the Rock' />
                    </CardItem>
                    <CardItem>
                        <img src={ic_paper} alt='Paper' title='Choose the Paper' />
                    </CardItem>
                    <CardItem>
                        <img src={ic_scissor} alt='Scissor' title='Choose the Scissor' />
                    </CardItem>
                </CardRow>
            </div>
        )
    }
}