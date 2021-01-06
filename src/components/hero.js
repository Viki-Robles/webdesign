import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './hero.module.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import brain from '../images/brainpicture.png';
import hand from '../images/handpicture.png';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#F9FE12',
        borderRadius: '0 0 40% 50%',
        paddingTop:'10%',
        [theme.breakpoints.down('sm')]:{
            display:'inherit'
        }
    },
    heroText: {
        textAlign: 'center',
        justifyContent: 'center',
        zIndex: '2',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '100px',

        },
    },
    picture: {
        width: '100%',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            margintop:'70%'
        },
        [theme.breakpoints.up('md')]: {
            margintop:'0'
        }
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingLeft: '80px',
    },
    picureBox:{
        position:'relative',
        justifyContent:'center'
    },
    becreative:{
        fontWeight:'bold'
    },
    becreativeBox:{
        paddingLeft:'20px',
        marginTop:'15%',
        [theme.breakpoints.up('md')]:{
            marginTop:'0',
        }
    },
    beyouBox:{
        paddingRight:'20px',
        justifyContent:'flex-end'
    },
    beyou:{
        fontWeight:600
    }

}))

const theme = createMuiTheme();

theme.typography.h2 = {
    fontSize: '3rem',
    textDecoration: 'line-through',
    textDecorationColor: 'yellow',
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        fontWeight: 'bold'
    },
    [theme.breakpoints.up('md')]: {
        color: 'black',
        fontSize: '5rem',
        fontWeight: 'bold'
    }
};

export default function Hero() {
    const classes = useStyles();


    return (
        <>
            <Grid container className={classes.hero} md={12} sm={12} xs={12}>
                <Grid container direction='column' className={classes.becreativeBox}>
                    <Typography variant='h1'  className={classes.becreative}>Be</Typography>
                    <Typography variant='h1' className={classes.becreative}>Creative.</Typography>
                </Grid>
                <Grid container className={classes.pictureBox}>
                <img src={hand} alt='' className={classes.picture}/>
                </Grid>
                <Grid container className={classes.beyouBox}>
                    <Typography variant='h1' className={classes.beyou}>Be You.</Typography>
                </Grid>
                
            </Grid>



            {/* <Grid container md={12} className={classes.buttonContainer} direction='column'>
                <Grid>
                    <a href='#projects'>
                        <div className={styles.button}>
                            <div className={styles.buttonName}>Projects</div>
                            <div className={styles.blurred}>
                                <span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </a>
                </Grid>
            </Grid> */}
        </>
    )
}