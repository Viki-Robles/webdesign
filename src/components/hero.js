import React, { useState, useEffect  } from "react";
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './hero.module.css';
import { createMuiTheme } from '@material-ui/core/styles';
import hand from '../images/handpicture.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#F9FE12',
        borderRadius: '0 0 40% 50%',
        paddingTop: '10%',
        [theme.breakpoints.down('sm')]: {
            display: 'inherit'
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
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            margintop: '70%'
        },
        [theme.breakpoints.up('md')]: {
            margintop: '0'
        }
    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingLeft: '80px',
    },
    picureBox: {
        position: 'relative',
        justifyContent: 'center'
    },
    becreative: {
        fontWeight: 'bold',
        marginBottom:'30px',
    },
    becreativeBox: {
        paddingLeft: '20px',
        marginTop: '20%',
        [theme.breakpoints.up('md')]: {
            marginTop: '5%',
            
        }
    },
    beyouBox: {
        paddingRight: '20px',
        justifyContent: 'flex-end'
    },
    beyou: {
        fontWeight: 600
    },
    projectsButton:{
        backgroundColor: `black`,
        '&:hover': {
          backgroundColor: `black`,
        },
        alignItems: 'right',
        justifyContent: 'center',
        borderRadius: '4em',
        padding: '20px',
        textDecoration: 'none',
        fontWeight:'bold'   
    },
    signUpLink: {
        color:'white',
        fontSize:'20px',
        [theme.breakpoints.down('xs')]: {
            fontSize:'16px'
        }
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
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>
            <Grid container className={classes.hero} md={12} sm={12} xs={12}>
                <Grid container direction='column' className={classes.becreativeBox} md={6} 
                style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                    <Typography variant='h1' className={classes.becreative}>Be</Typography>
                    <Typography variant='h1' className={classes.becreative}>Creative.</Typography>
                    <Grid className={classes.projectsButton} container md={6} xs={6}>
                    <Link
                    href='/#projects'
                    target='_blank'
                    className={classes.signUpLink}
                    style={{ textDecoration: 'none' }}>
                    VIEW OUR WORK
                  </Link>
                  </Grid>
                </Grid>
                <Grid container className={classes.pictureBox} style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
                    <img src={hand} alt='' className={classes.picture} />
                </Grid>
                <Grid container className={classes.beyouBox} style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                    <Typography variant='h1' className={classes.beyou}>Be You.</Typography>
                </Grid>
            </Grid>
        </>
    )
}