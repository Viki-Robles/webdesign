import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '20px',
        backgroundColor:'rgb(36, 36, 36)',
        color:'white',
        marginTop:'25px',
        margin:'0 auto'
    },
    typography:{
        marginRight:'10px'
    }

}))


export default function Footer() {
    const classes = useStyles();

    return(
        <Grid container md={12} className={classes.footer} direction='row' justify='center'>
           <Grid>
               <Typography className={classes.typography}>©️ Copywrite 2021/ Made with ❤️ in the 🇬🇧</Typography>
           </Grid>
           <Grid>
               <Typography className={classes.typography}>15b Hildreth Street, Balham, London, SW12 9RQ</Typography>
           </Grid>
           <Grid className={classes.typography}>☎️ +44 7438577974</Grid>
        </Grid>
    )
}