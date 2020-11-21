import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import breza from '../images/phone.png';
import hellohub from '../images/phone.svg';
import Button from "@material-ui/core/Button"
import Image from '../images/background.png';
import layers from '../images/layers.png';
import styles from './main.module.css';
import arrow from '../images/arrow.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const data = [
    {picture: hellohub, text: [{firstText:'Redesigning HelloHub'}, {secondText:'Web Design - UI'}]},
    {picture: breza,  text: [{firstText:'Launching Brezaa'}, {secondText:'Web Design - UI'}]}

]

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0', 
        padding: '0',
        position: 'relative',
        maxWidth: '900px',
        transform: 'skew(0deg, 20deg)',
        textAlign:'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop:'110%'
          },
          [theme.breakpoints.up('md')]: {
            paddingTop:'45%',
          },
          [theme.breakpoints.up('lg')]: {
            paddingTop:'30%',
          }
        
    },
    picture: {
        borderRadius:'10px',
        width:'100%',
        textAlign:'center',
       

    },
    pictureContainer: {
        textAlign:'center',
        borderRadius:'10px',
    },
    text: {
        color: 'white',
       
    },
    main: {
        paddingRight: '11.1111%',
        paddingLeft:'10%',
        justifyContent:'center'
    },
    title: {
        color:'black',
       
        padding:'100px 0 0 0',
        fontWeight:'bold'
    },
    button: {
        backgroundColor:'#EDFF00',
        color:'black',
        textTransform: 'none',
        margin:'10px',
        fontSize:'20px',
      },
      buttonContainer: {
          textAlign: 'left',
          paddingTop:'40px'
      },
      background: {
        // backgroundImage: `url(${layers})`,
        // backgroundColor:'#C4C4C4',
        // backgroundSize:'cover'
      },
      arrow: {
          textAlign:'left',
          paddingBottom:'20px',
          [theme.breakpoints.down('xs')]: {
            display:'none'
          },
      }
     
}))
const theme = createMuiTheme();
theme.typography.h4 = {
    fontSize: '30px',
    textAlign: 'left',
    '@media (min-width:600px)': {
        fontSize: '3vw',
        textAlign: 'left',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3vw',
        textAlign: 'left',
    },
};


export default function Main() {
    const classes = useStyles();

    return(
        <>
        <div className={styles.section}>
        {/* <Grid className={classes.background}> */}
        <Grid container md={12} className={classes.container} justify="space-between" xs={12} sm={12}>
            {
                data.map(({ picture, text:[{firstText, secondText}] }, index) => {
                    const reverseItems = index % 2 === 0;
                   return( 
                       <Grid container direction={reverseItems ? 'row-reverse' : ''}>
                        <Grid
                            md={6}
                            sm={6}
                            className={classes.main}
                            container
                            direction="column">
                        <Grid container={classes.typographyContainer}>
                            <Grid className={classes.arrow}>
                            <img src={arrow}/>
                            </Grid>
                            <ThemeProvider theme={theme}>
                            <Typography component='h4'
                                variant='h4'
                                className={classes.text}>{firstText}</Typography>
                                <Typography component='h3'
                                variant='h3'
                                className={classes.text}>{secondText}</Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid className={classes.buttonContainer}>
                        <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button>
                        </Grid>
                        </Grid>
                        <Grid
                            md={6}
                            sm={6}

                            className={classes.pictureContainer}
                            direction="column">
                            <img src={picture} className={classes.picture} />
                    </Grid>
                </Grid>
                )
            })
        }
    </Grid>
    </div>
    {/* <img src={layers}/> */}
    {/* </Grid> */}
</>  
    )
}