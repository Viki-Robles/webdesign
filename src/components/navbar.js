import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/mylogo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'hidden'

  },
  navBar: {
    justifyContent: 'flex-start',
    paddingTop: '20px',

    [theme.breakpoints.down('xs')]: {
      // justifyContent: 'space-between',

    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 200,
      flexShrink: 0,
    },
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    height: '10vh',
    justifyContent: 'center',
    backgroundColor: '#F9FE12',
    color: '#000',
    [theme.breakpoints.down('xs')]: {
      height: '11vh',
      backgroundColor: '#F9FE12',
    },
  },

  menuButton: {
    fontSize:'3rem',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      color: '#FFA500',
    },
    padding: '0',
    margin: '5px'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 220,
    backgroundColor: 'black',
    paddingTop:'30px',
  },
  toolbar:{
    paddingBottom:'15px'
  },
  navLink: {
    color: `black`,
    paddingRight: 40,
    fontSize: '16px',
    textDecoration:'none',
    fontWeight:'600',
    paddingTop:'10px',
    letterSpacing: '.1em',
    [theme.breakpoints.down('sm')]: {
      color:'#F9FE12',
      fontWeight:'bold',
    }
  },
  linkButton: {
  padding:'8px 10px 8px 10px',
  color:'black'
},
signUpLink:{
    color:'white'
},
  purpleButton: {
    [theme.breakpoints.down('sm')]:{
        display:'none'
    },
    backgroundColor: `black`,
    '&:hover': {
      backgroundColor: `black`,
    },
    display: 'inline-flex',
    alignItems: 'right',
    justifyContent: 'center',
    borderRadius: '4em',
    padding: '10px 10px',
    textDecoration: 'none',
    fontWeight:'bold'
  },
  mainText: {
    color: `rgba(81, 51, 171, 1)`,
    fontWeight: '400',
    marginBottom: 10,
    fontSize: 22,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 15,
    },
  },
  logoContainer:{
    paddingTop:'5px'
  },
  subText: {
    color: `rgba(81, 51, 171, 1)`,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '300',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 25,
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
    color: '#F9FE12'
  },
  menuIcon:{
fontSize:'2.5rem'
  },
  headerTitle: {
    paddingRight: 40,
    fontWeight:600
  },
  logo:{
    padding: '0',
    marginRight:'15px',
    [theme.breakpoints.down('sm')]:{
      width:'40%',
      padding: '8px 15px 8px 15px'
    },
    [theme.breakpoints.up('md')]: {
      width:'35%'
    },
    [theme.breakpoints.down('xs')]: {
      width:'70%'
    }
  },
  closeMenuButton:{
    fontSize:'3rem'
  },
 
})); // NavBar
const NavBar = () => {
  const drawerLinks = [
    { text: 'HOME', href: '/' },
    { text: 'SERVICES', href: '' },
    { text: 'WORK', href: '#projects' },

  ];
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        {drawerLinks.map((link) => (
          <ListItem button key={link.text}>
            <Link href={link.href} target='_blank' className={classes.navLink}>
              <ListItemText primary={link.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Grid container className={classes.navBar} md={6} direction='row'>
            <Box display='flex' className={classes.logoContainer}>
                  <img style={{ height: 'auto' }} src={logo} alt='logo' className={classes.logo} />
                </Box>
            </Grid>

            <Grid container md={6} justify="flex-end">
              <Grid container direction='row' md={9} justify="flex-end">
                <Hidden smDown>
                  {drawerLinks.map(
                    (link, i) =>
                      i !== drawerLinks.length + 1 && (
                        <Link key={i} href={link.href} target='_blank' className={classes.navLink}>
                           {link.text}
                        </Link>
                      )
                  )}
                </Hidden>
                </Grid>
            <Grid container className={classes.purpleButton} md={3}>
                  <Link
                    href='https://meetings.hubspot.com/vasiliki-robles'
                    target='_blank'
                    className={classes.signUpLink}
                    style={{ textDecoration: 'none' }}>
                    GET STARTED
                  </Link>
                </Grid>
               
                <IconButton
                  color='inherit'
                  aria-label='Open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}>
                  <MenuIcon className={classes.menuIcon}/>
                </IconButton>
                </Grid>


          </Toolbar>
        </AppBar>          
        {/* CODE FOR WHEN DRAWER IS OPEN  0 20 50 rgba(0 0 0 , .5)*/}
      </div>
      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            // Better open performance on mobile. >
            ModalProps={{ keepMounted: true }}>
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton} size={'large'}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;