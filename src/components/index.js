import React from 'react'
import { render } from 'react-dom'
import { StyleRoot } from 'radium'
import Timeline from '../components/timeline'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import uidesign from '../images/uidesign.svg';

const data = [
  {services:'Web Design', details:'We combine UI design with insight-led user experience strategy to create websites, and bespoke interfaces. An experience that enhances your brand, underpinned by a sharp focus on your commercial considerations.', picture:uidesign},
  {services:'Mobile Development', details:'HTML/CSS, JavaScript Animation, WordPress, Responsive Website', picture:uidesign},
  {services:'Website Design', details:'HTML/CSS, JavaScript Animation, WordPress, ReactJS, Gatsby, NextJS, Responsive Website', picture:uidesign},
  {services:'UI/UX', details:'Landing Pages, Wireframing, Prototyping, Mobile App Design', picture:uidesign},

]


const useStyles = makeStyles((theme) => ({
 
  typography: {
      paddingLeft: '40px',
      fontWeight: 'bold',
      paddingTop:'80px',
      paddingBottom:'40px'
  },
  timeline: {
    border:'10px solid black'
  },
  details: {
    paddingTop:'20px',
  },
  picture: {
    width:'30%'
  }

}));
export default function Index() {
  const classes = useStyles();

  return(
    <StyleRoot>
      <Grid>
      <Typography variant='h4' component='h4' className={classes.typography}>Our Services.</Typography>
      </Grid>
      <Timeline activeColor='yellow' className={classes.timeline}>
        {data.map(({details, services, picture}) => (
        <div key={services}>
          <img src={picture} className={classes.picture}/>
          <h3>{services}</h3>
          <Typography component='p' className={classes.details}>{details}</Typography>
          
        </div>
        ))}
      </Timeline>
    </StyleRoot>
  )
}


