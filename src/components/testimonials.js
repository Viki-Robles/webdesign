import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Testimonial from './testimonial';


const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: '40px',
        fontWeight: 'bold',
        color: 'black',
        marginTop:'8%',
        marginBottom:'5%'

    },
    box: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            marginBottom: '40px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    }

}));
export default function Testimonials() {
    const classes = useStyles();

    return (
        <>
       
            <div data-aos="fade-in">
                <Typography className={classes.title} variant='h4' component='h4'>A few words from...</Typography>
            </div>
            <div data-aos='fade-up'>
                <Box md={12} flexWrap='none' className={classes.box}>
                    <Testimonial />
                </Box>
            </div>
        </>
    )
}