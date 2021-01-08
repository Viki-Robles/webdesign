import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import { Grid, Typography } from '@material-ui/core';
import hellohub from '../images/hellohub.png';
import './main.css';
import breza from '../images/brezaa.png';


const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: '80px'
    },
    typography: {
        paddingLeft: '40px',
        fontWeight: 'bold',
        color: 'black'
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
            paddingLeft: '0px'
        },

    },
    secondButtonContainer: {
        marginTop: '20px',
        justifyContent: 'center'
    },
    secondMain: {
        marginBottom: '40px',
    },
    challenge: {
        fontWeight: 'bold'
    },
    mainSubtitles: {
        fontWeight: 'bold'
    }
}));
export default function Main() {
    const classes = useStyles();
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>

            <Grid container className={classes.main} sm={12} md={12}>
                <hr />
                <Typography variant='h4' component='h4' className={classes.typography} id='projects'>Case Studies.</Typography>
                <Grid container md={12} className={classes.firstMain} sm={12}>
                    <Grid container md={6} className={classes.firstBox} sm={12} style={{ transform: `translateY(${offsetY * 0.06}px)` }}>
                        <Typography variant='h4' component='h5' className={classes.mainSubtitles} md={6} sm={12}>Design.</Typography>
                        <Typography component='p' variant='h6'>
                            Hellohub is an app that connects locals in the social
                            distancing age and eases the void of social interaction, by enhancing human connection through.
                     </Typography>
                        <Typography variant='h6' component='h6' className={classes.challenge}>Challenge:</Typography>
                        <Typography component='p' variant='h6'>Redesign the UI of the HelloHub website and the venue app Interface.</Typography>
                    </Grid>
                    <Grid container md={6} direction='column' className={classes.secondBoxContainer} sm={12}>
                        <div className='projectsWrapper'>
                            <div className='projectsCard'>
                                <img src={hellohub} />
                                <div className='info'>
                                    <h1>HelloHub</h1>
                                </div>
                            </div>
                        </div>
                        <Grid container className={classes.secondButtonContainer}>
                            {/* <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container md={12} className={classes.secondMain} sm={12}>
                    <Grid container md={6} direction='column' className={classes.secondPictureContainer} sm={12}>
                        <div className='projectsWrapper'>
                            <div className='projectsCard'>
                                <img src={breza} />
                                <div className='info'>
                                    <h1>Brezaa Dating</h1>
                                </div>
                            </div>
                        </div>
                        <Grid container className={classes.buttonContainer}>
                            {/* <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button> */}
                        </Grid>
                    </Grid>
                    <Grid container md={6} className={classes.secondBox} sm={12}>
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