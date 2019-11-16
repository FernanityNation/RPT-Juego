import React from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import classes from './RPS.module.css'

import ic_rock from '../images/ic_rock.png'
import ic_paper from '../images/ic_paper.png'
import ic_scissor from '../images/ic_scissor.png'

export default class RPS extends React.Component {
    
    render() {

        return (
            <div className={classes.RPS}>
                <Container maxWidth='md'>
                    <Grid container direction='row' justify='space-around' alignItems='center'>
                        <Grid item xs={3} container direction='column'>
                            <Grid item xs={8}>
                                <Paper className={classes.paperCustom}>
                                    <img src={ic_rock} alt='Rock' title='Choose the Rock' />
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='contained' color='secondary'>Rock</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} container direction='column'>
                            <Grid item xs={8}>
                                <Paper className={classes.paperCustom}>
                                    <img src={ic_paper} alt='Paper' title='Choose the Paper' />
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='contained' color='secondary'>Paper</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} container direction='column'>
                            <Grid item xs={8}>
                                <Paper className={classes.paperCustom}>
                                    <img src={ic_scissor} alt='Scissor' title='Choose the Scissor' />
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='contained' color='secondary'>Scissor</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}