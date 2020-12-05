import React from "react";
import Button from "@material-ui/core/Button"
import {Grid, Typography} from '@material-ui/core';
import menuicon from '../images/menuicon.svg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    
  },
  headerbutton: {
    backgroundColor:'black',
    color:'white',
    textTransform: 'none',
    margin:'10px',
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  menuicon: {
    margin:'5px',

  },
  headersubcontainer: {
    paddingRight:'10px',
  },
  headerTitle: {
    padding:'10px 0 10px 10px',
    fontFamily:'Nova Slim',
    color:'black',
    fontWeight:'600'
  }

}))


export default function Header() {
  const classes = useStyles();

  return (
    <Grid container md={12} className={classes.header}>
      <Grid container md={6} xs={6}><Typography variant='h5' className={classes.headerTitle}>Create.</Typography></Grid>
      <Grid container md={6} justify='flex-end' className={classes.headersubcontainer} xs={6}>
        <Button variant="contained" color={'primary'} className={classes.headerbutton}><a href='#form'>Contact us</a></Button>
        <img src={menuicon} className={classes.menuicon}/>
      </Grid>
    </Grid>
  )
}
