import React from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import classes from './RPS.module.css'

export default class RPS extends React.Component {
    
    render() {

        return (
            <div className={classes.RPS}>
                <Container maxWidth='md'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paperCustom}>xs 12</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}