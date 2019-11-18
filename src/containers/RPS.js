import React from 'react'

import { getRandomNumber } from '../helpers/utils'

import classes from './RPS.module.css'

import CardRow from '../UI/CardRow/CardRow'
import CardItem from '../UI/CardItem/CardItem'
import Button from '../UI/Button/Button'

import ComputerCards from '../components/Computer/Computer'

import ic_rock from '../images/ic_rock.png'
import ic_paper from '../images/ic_paper.png'
import ic_scissor from '../images/ic_scissor.png'

export default class RPS extends React.Component {
    state = {
        cards: [
            {id: 1, label: 'rock', selected: false},
            {id: 2, label: 'paper', selected: false},
            {id: 3, label: 'scissor', selected: false}
        ],
        computerCards: [
            {id: 1, label: 'rock', selected: false},
            {id: 2, label: 'paper', selected: false},
            {id: 3, label: 'scissor', selected: false}
        ],
        loading: false,
        combs: [
            {player: 'rock', cpu: 'rock', condition: 'tie'},
            {player: 'rock', cpu: 'paper', condition: 'lose'},
            {player: 'rock', cpu: 'scissor', condition: 'win'},
            {player: 'paper', cpu: 'rock', condition: 'win'},
            {player: 'paper', cpu: 'paper', condition: 'tie'},
            {player: 'paper', cpu: 'scissor', condition: 'lose'},
            {player: 'scissor', cpu: 'rock', condition: 'lose'},
            {player: 'scissor', cpu: 'paper', condition: 'win'},
            {player: 'scissor', cpu: 'scissor', condition: 'tie'}
        ],
        finished: null
    }

    selectedCardHandler = (label) => {
        const updatedCardsElements = [...this.state.cards]
        const findIndex = updatedCardsElements.findIndex(v => v.label === label)
        updatedCardsElements[findIndex].selected = !updatedCardsElements[findIndex].selected
        this.letComputerPlay()
        this.setState({
            cards: updatedCardsElements,
            humanCardSelectedIndex: findIndex
        })
    }

    letComputerPlay = () => {
        this.setState({loading: true})
        setTimeout(() => {
            const updatedComputerOptions = [...this.state.computerCards]
            const num = getRandomNumber(0, updatedComputerOptions.length)
            updatedComputerOptions[num].selected = !updatedComputerOptions[num].selected
            
            this.finishTheGame()

            this.setState({
                loading: false,
                computerCards: updatedComputerOptions
            })
        }, 1000)
    }

    finishTheGame = () => {
        const combinations = [...this.state.combs]
        const playerSelected = this.state.cards.find(v => v.selected === true)
        const cpuSelected = this.state.computerCards.find(v => v.selected === true)
        const combi = combinations.find(v => v.player === playerSelected.label && v.cpu == cpuSelected.label)
        
        let condition = ''
        if (combi.condition === 'tie') {
            condition = 'Empate'
        }
        if (combi.condition === 'win') {
            condition = 'Ganaste'
        }
        if (combi.condition === 'lose') {
            condition = 'Perdiste'
        }

        this.setState({finished: condition})
    }

    resetGameHandler = () => {
        let updatedCards = [...this.state.cards]
        let updatedComputeCards = [...this.state.computerCards]
        updatedCards.forEach((v, i) => {
            updatedCards[i].selected = false
        })
        updatedComputeCards.forEach((v, i) => {
            updatedComputeCards[i].selected = false
        })
        this.setState({
            finished: null,
            cards: updatedCards,
            computerCards: updatedComputeCards
        })
    }


    render() {
        const cards = this.state.cards
        const cardsComputer = this.state.computerCards

        let hasSelectedOption = cards[0].selected || cards[1].selected || cards[2].selected
        let hasSelectedComputerOption = cardsComputer[0].selected || cardsComputer[1].selected || cardsComputer[2].selected


        return (
            <div className={classes.RPS}>
                <h2 style={{textAlign: 'center'}}>Choose an option</h2>
                <CardRow>
                    <CardItem 
                        selected={cards[0].selected}
                        cardAction={<Button disabled={hasSelectedOption} clicked={this.selectedCardHandler.bind(this, 'rock')}>Rock</Button>}>
                        <img src={ic_rock} alt='Rock' title='Choose the Rock' />
                    </CardItem>
                    <CardItem
                        selected={cards[1].selected}
                        cardAction={<Button disabled={hasSelectedOption} clicked={this.selectedCardHandler.bind(this, 'paper')}>Paper</Button>}>
                        <img src={ic_paper} alt='Paper' title='Choose the Paper' />
                    </CardItem>
                    <CardItem
                        selected={cards[2].selected}
                        cardAction={<Button disabled={hasSelectedOption} clicked={this.selectedCardHandler.bind(this, 'scissor')}>Scissor</Button>}>
                        <img src={ic_scissor} alt='Scissor' title='Choose the Scissor' />
                    </CardItem>
                </CardRow>
                {this.state.loading ? <h3 style={{textAlign: 'center'}}>Thinking...</h3>: null}
                {hasSelectedComputerOption ? <ComputerCards cards={cardsComputer} />: null}
                {
                    this.state.finished 
                        ? 
                            (
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <h1 style={{textAlign: 'center', marginTop: '50px'}}>{this.state.finished}</h1> 
                                    <Button clicked={this.resetGameHandler}>Reset</Button>
                                </div>
                            )
                        : null
                }
            </div>
        )
    }
}