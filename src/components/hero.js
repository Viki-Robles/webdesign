import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './hero.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import brain from '../images/brainpicture.png';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: 'white',
    },
    heroText: {
        textAlign: 'center',
        justifyContent: 'center',
        zIndex: '2',
        [theme.breakpoints.down('sm')]: {
            paddingTop:'100px'
          },
    },
    picture: {
        width: '100%'
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingLeft: '80px',
    }

}))

const theme = createMuiTheme();
// //passion
// theme.typography.h3 = {
//     fontSize: '3rem',
//     color: 'black',
//     [theme.breakpoints.down('sm')]: {
//         fontSize: '2rem',
//         fontWeight:'bold'
//     },
//     [theme.breakpoints.up('md')]: {
//         color: 'black',
//         fontSize: '5rem',

//     },
// };

theme.typography.h2= {
    fontSize: '3rem',
    textDecoration:'line-through',
    textDecorationColor:'yellow',
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        fontWeight:'bold'
    },
    [theme.breakpoints.up('md')]: {
        color: 'black',
        fontSize: '5rem',
        fontWeight:'bold'
    },
};

export default function Hero() {
    const classes = useStyles();
    return (
        <>
            <Grid container md={12} className={classes.hero} direction='row' sm={12}>
                <Grid container md={6} direction='column' className={classes.heroText} sm={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' component='h4' className={classes.typography}>We Blend</Typography>
                        <Typography variant='h2' component='h4' className={classes.typography}>Creativity</Typography>
                        <Typography variant='h3' component='h4' className={classes.typography}>Technology</Typography>
                        <Typography variant='h4' component='h3'>&amp;</Typography>
                        <Typography variant='h3' component='h4'>Passion</Typography>
                    </ThemeProvider>
                </Grid>
               <Grid container md={6}>
                    <img src={brain} className={classes.picture} alt=''/>
               </Grid>

            </Grid>
            <Grid container md={12} className={classes.buttonContainer} direction='column'>
                <Grid container md={6}>
                    <a href='#projects'>
                    <div className={styles.button}>
                        <div className={styles.buttonName}>Projects</div>
                        <div className={styles.blurred}>
                            <span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    </a>
                </Grid>
                <Grid container md={6} />
            </Grid>
            <hr/>
        </>
    )
}