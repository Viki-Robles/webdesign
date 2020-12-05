import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import { Grid, Typography } from '@material-ui/core';
import hellohub from '../images/hellohub.png';
import './main.module.css';
import breza from '../images/breza.png';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const data = [
    { id: 1, header: 'Design', challenge: 'Challenge', paragraph: 'Hellohub is an app that connects locals in the social distancing age and eases the void of social interaction, by enhancing human connection through.', solution: 'Redesign the UI of the HelloHub website and the venue app Interface.', picture: hellohub },
    { id: 2, header: 'Build', challenge: 'Challenge', paragraph: 'Brezaa is a dating app that uses icebreakers to break the uncomfort of meeting someone first time.', solution: 'Worked on building Brezaas new Home page for the launch of the new website.', picture: breza },

]

const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: '80px',

    },
    typography: {
        paddingLeft: '40px',
        fontWeight: 'bold',
        color:'black'
    },
    firstBox: {
        padding: '10%'
    },
    secondBox: {
        padding: '10%'
    },
    picture: {
        width: '45%',
        margin: '0 auto'
    },
    button: {
        color: 'black',
        background: '#F9FE12',
        textTransform: 'none',
    },
    buttonContainer: {
        justifyContent: 'center'
    },
    secondPictureContainer: {
        paddingLeft: '40px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0px'
          },

    },
    secondButtonContainer: {
        marginTop:'20px',
        justifyContent: 'center'
    },
    secondMain: {
        marginBottom: '40px'
    },
    challenge: {
        fontWeight: 'bold'
    },
    mainSubtitles: {
        fontWeight:'bold'
    }

}));
export default function Main() {
    const classes = useStyles();

    return (
        <>
        
            <Grid container className={classes.main}>
            <hr />
                <Typography variant='h4' component='h4' className={classes.typography} id='projects'>Case Studies.</Typography>
                <Grid container md={12} className={classes.firstMain}>
                    <Grid container md={6} className={classes.firstBox}>
                        <Typography variant='h4' component='h5' className={classes.mainSubtitles}>Design.</Typography>
                        <Typography component='p' variant='h6'>
                            Hellohub is an app that connects locals in the social
                            distancing age and eases the void of social interaction, by enhancing human connection through.
                     </Typography>
                        <Typography variant='h6' component='h6' className={classes.challenge}>Challenge:</Typography>
                    <Typography component='p' variant='h6'>Redesign the UI of the HelloHub website and the venue app Interface.</Typography>
                </Grid>
                <Grid container md={6} direction='column' className={classes.pictureContainer}>
                        <img src={hellohub} alt='' className={classes.picture} />
                        <Grid container className={classes.secondButtonContainer}>
                            <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container md={12} className={classes.secondMain}>
                    <Grid container md={6} direction='column' className={classes.secondPictureContainer}>
                        <img src={breza} alt='' className={classes.picture} />
                        <Grid container className={classes.buttonContainer}>
                            <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button>
                        </Grid>
                    </Grid>
                    <Grid container md={6} className={classes.secondBox}>
                        <Typography variant='h4' component='h5' className={classes.mainSubtitles}>Build.</Typography>
                        <Typography component='p' variant='h6'>
                            Brezaa is a dating app that uses icebreakers to break the uncomfort of meeting someone first time.
                            </Typography>
                    <Typography variant='h6' component='h6' className={classes.challenge}>Challenge:</Typography>
                            <Typography component='p' variant='h6'>Worked on building Brezaa's new Home page for the launch of the new website.</Typography>
                    </Grid>
                </Grid>
            </Grid>
           
        </>
    )
}