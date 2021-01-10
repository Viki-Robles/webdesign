import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import { Grid, Typography } from '@material-ui/core';
import logo from '../images/logo2.svg'

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '8rem 8%',
        backgroundColor:'rgb(36, 36, 36)',
        color:'white',
        marginTop:'-15px'
    },
    address:{
        textAlign: 'right'
    },
    contact:{
        justifyContent:'flex-end',
        marginTop:'20px'
    },
    typography:{
        letterSpacing:'-0.075rem',
        fontWeight:'bold'
    },
    list: {
        marginTop:'40px'
    },
    logoFooter : {
        width:'20%'
    }

}))


export default function Footer() {
    const classes = useStyles();

    return(
        <Grid container md={12} className={classes.footer}>
            <Grid container md={6} direction='column' className={classes.list}>
            <img src={logo} className={classes.logoFooter}/>
            </Grid>
            <Grid container md={6} direction='column' className={classes.address}>
                <Grid container direction='column'>
                <Typography variant='h6' className={classes.typography}>pringe</Typography>
                <Typography variant='h6' className={classes.typography}>15b Hildreth Street</Typography>
                <Typography variant='h6' className={classes.typography}>London</Typography>
                <Typography variant='h6' className={classes.typography}>SW12 9RQ</Typography>
                </Grid>
                <Grid container className={classes.contact} direction='column'>
                    <Typography variant='h5'>+44 7438577974</Typography>
                    <Typography variant='h5'>vasiliki.robles@gmail.com</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}