import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import picture from '../images/aboutpicture.png';

const useStyles = makeStyles((theme) => ({
    about: {
        paddingTop: '10%',
        paddingBottom: '20%'
    },
    typography: {
        paddingRight: '11.1111%',
        paddingLeft: '5.55556%',
        textAlign:'right',
    },
    title: {
        textAlign:'center',
        paddingTop:'35%'
    },
    aboutContainer: {
        backgroundColor:'white'
    },
    typographyMiddle: {
        color:'#EDFF00'
    }
}))


export default function About() {
    const classes = useStyles();

    return (
        <Grid className={classes.aboutContainer}>
        <Typography variant='h3' component='h3' className={classes.title}>About me</Typography>
        <Grid container md={12} className={classes.about}>
            <Grid container md={3} className={classes.typography}>
                <Typography variant='h4' component='h4'>WEB DESIGN LONDON </Typography>
                <Typography variant='h3' component='h3' className={classes.typographyMiddle}>WEBSITE DESIGN </Typography>
                <Typography variant='h4' component='h4'>WEB AGENCY LONDON</Typography>
                </Grid>
                <Grid container md={3}>
                    <img src={picture}/>
                </Grid>
            
            <Grid container md={6} className={classes.typography} direction='column'>
                <Typography>
                    Your London web design agency
                    We are a London web design company delivering stunning,
                    functional websites and apps that resonate with the people interacting
                    with them – your clients.
                    Our websites and apps don’t just look good,
                    they perform, they convert. If you are looking to generate enquiries, increase sales or maximise
                    awareness we have the in-house web design and development teams in place to achieve this.
                </Typography>
                <Typography>
                As London’s premier web design agency, we work with small start-ups,
                    government agencies and charities through to internationally
                    recognised brands like Ralph Lauren, Holiday Inn, MTV and
                    Savills to produce websites and apps that deliver.
                </Typography>
            </Grid>
        </Grid>
        </Grid>
    
    )
}