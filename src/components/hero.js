import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import black from '../images/black.png';
import styles from './hero.module.css';
// import { positions } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#C4C4C4',
        paddingBottom:'200px'
    },
    heroText: {
        textAlign: 'center',
        justifyContent: 'center',
        zIndex:'2',
        marginTop: '80px'

    },
    picture: {
        width: '150%'
    },
    buttonContainer: {
        backgroundColor: '#C4C4C4',
        paddingBottom: '140px',
        paddingLeft: '80px',
    },
    typography: {
        color: 'white'
    },
   
}))

export default function Hero() {
    const classes = useStyles();
    return (
        <>
            <Grid container md={12} className={classes.hero} direction='row'>
                <Grid container md={12} direction='column' className={classes.heroText}>
                    <Typography variant='h3' component='h3' className={classes.typography}>We blend</Typography>
                    <Typography variant='h2' component='h2' className={classes.typography}>Creativity, Technology</Typography>
                    <Typography variant='h1' component='h1' className={classes.typography}>Passion</Typography>
                    <Typography variant='h5' component='h5' className={classes.typography}>Web Design - UI Design</Typography>
                </Grid>

                <Box
                    color="text.primary"
                    p={1}
                    position="absolute"
                    top={10}
                    left="17%"
                    zIndex={1}>
                <img src={black} className={classes.picture} alt='' />
                    </Box>
               

            </Grid>


            <Grid container md={12} className={classes.buttonContainer} direction='column'>
                <Grid container md={6}>
                    <div className={styles.button}>
                        <div className={styles.buttonName}>See our Projects</div>
                        <div className={styles.blurred}>
                            <span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </Grid>
                <Grid container md={6} />
            </Grid>
            <Grid className={classes.skewed}></Grid>
        </>
    )
}