import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import breza from '../images/phone.png';
import hellohub from '../images/phone.png';
import Button from "@material-ui/core/Button"
import Image from '../images/background.png';
import layers from '../images/layers.png';
import styles from './main.module.css';
import arrow from '../images/arrow.svg';

const data = [
    {picture: hellohub, text: [{firstText:'Redesigning HelloHub'}, {secondText:'Web Design - UI'}]},
    {picture: breza,  text: [{firstText:'Launching Brezaa'}, {secondText:'Web Design - UI'}]}

]

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop:'45%',
        paddingBottom:'12%',
        margin: '0', 
        padding: '0',
        position: 'relative',
        maxWidth: '900px',
        transform: 'skew(0deg, 20deg)',
        textAlign:'center'

    },
    picture: {
        borderRadius:'10px',
        width:'100%',
        textAlign:'center',
        marginLeft:'20px'

    },
    pictureContainer: {
        textAlign:'center',
        borderRadius:'10px',
    },
    text: {
        color: 'white',
        textAlign:'center'
    },
    main: {
        paddingRight: '11.1111%',
        justifyContent:'center'
    },
    title: {
        color:'black',
        textAlign:'center',
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
          paddingBottom:'20px'
      }
     
}))



export default function Main() {
    const classes = useStyles();

    return(
        <>
        <div className={styles.section}>
        {/* <Grid className={classes.background}> */}
        <Grid container md={12} className={classes.container} justify="space-between">
            {
                data.map(({ picture, text:[{firstText, secondText}] }, index) => {
                    const reverseItems = index % 2 === 0;
                   return( 
                       <Grid container direction={reverseItems ? 'row-reverse' : ''}>
                        <Grid
                            md={6}
                            className={classes.main}
                            container
                            direction="column">
                        <Grid container={classes.typographyContainer}>
                            <Grid className={classes.arrow}>
                            <img src={arrow}/>
                            </Grid>
                            <Typography component='h4'
                                variant='h4'
                                className={classes.text}>{firstText}</Typography>
                                <Typography component='h3'
                                variant='h3'
                                className={classes.text}>{secondText}</Typography>
                        </Grid>
                        <Grid className={classes.buttonContainer}>
                        <Button variant="contained" color={'primary'} className={classes.button}>Visit Site</Button>
                        </Grid>
                        </Grid>
                        <Grid
                            md={6}
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