import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import picture from '../images/aboutpicture.png';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    about: {
        paddingTop: '10%',
        paddingBottom: '20%'
    },
    typography: {
        paddingRight: '11.1111%',
        paddingLeft: '5.55556%',
        textAlign: 'right',
    },
    title: {
        textAlign: 'center',
        color:'black'
    },
    aboutContainer: {
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            paddingTop:'120%',
          },
          [theme.breakpoints.up('md')]: {
            paddingTop:'45%',
          },
          [theme.breakpoints.up('lg')]: {
            paddingTop:'30%',
          }
    },
    typographyMiddle: {
        color: '#EDFF00'
    },
    picture: {
        width: '100%'
    },
    paragraph: {
        [theme.breakpoints.down('xs')]: {
            textAlign:'center'
          },
          [theme.breakpoints.up('md')]: {
            textAlign:'left'
          },
          [theme.breakpoints.up('lg')]: {
            textAlign:'right',
            padding:'50px'
          }
    }
}))
const theme = createMuiTheme();



export default function About() {
    const classes = useStyles();

    return (
        <Grid className={classes.aboutContainer} xs={12}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h3' className={classes.title}>About me</Typography>
            </ThemeProvider>
            <Grid container md={12} className={classes.about} xs={12}>
                <Grid container md={3} className={classes.typography}>
                    <Typography variant='h4' component='h4'>WEB DESIGN LONDON </Typography>
                    <Typography variant='h3' component='h3' className={classes.typographyMiddle}>WEBSITE DESIGN </Typography>
                    <Typography variant='h4' component='h4'>WEB AGENCY LONDON</Typography>
                </Grid>
                <Grid container md={3}>
                    <img src={picture} className={classes.picture} />
                </Grid>

                <Grid container md={6} className={classes.paragraph} direction='column'>
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