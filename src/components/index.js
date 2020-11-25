import React from 'react'
import { render } from 'react-dom'
import { StyleRoot } from 'radium'
import Timeline from '../components/timeline'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const data = [
  {services:'Web Design', details:'We combine award-winning UI design with insight-led user experience strategy to create websites, apps and bespoke interfaces. Expect a look that enhances your brand, underpinned by a sharp focus on your commercial considerations.HTML/CSS, JavaScript Animation, WordPress, Responsive Website'},
  {services:'Mobile Development', details:'HTML/CSS, JavaScript Animation, WordPress, Responsive Website'},
  {services:'SEO Optimization', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {services:'WebSite Design', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {services:'UI/UX', details:'Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App'},

]


const useStyles = makeStyles((theme) => ({
 
  typography: {
      paddingLeft: '40px',
      fontWeight: 'bold',
      paddingTop:'80px'
  },
  timeline: {
    border:'10px solid black'
  },
  services: {
    paddingBottom:'200px'
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
        {data.map(({details, services}) => (
        <div key={services}>
          <h2>{services}</h2>
          {details}
        </div>
        ))}
      </Timeline>
    </StyleRoot>
  )
}


