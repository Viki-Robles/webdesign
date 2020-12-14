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
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
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
    backgroundColor: '#fff',
    color: '#000',
    [theme.breakpoints.down('xs')]: {
      height: '9vh',
      backgroundColor: '#fff',
    },
  },
  menuButton: {
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
    backgroundColor: 'yellow'
  },
  navLink: {
    color: `black`,
    paddingRight: 40,
    fontSize: '2rem',
    textDecoration:'none',
    fontWeight:'600'
  },
  linkButton: {
  padding:'8px 20px 8px 20px',
  color:'black'
},
signUpLink:{
    color:'white'
},
  purpleButton: {
    backgroundColor: `black`,
    '&:hover': {
      backgroundColor: `black`,
    },
    display: 'inline-flex',
    alignItems: 'right',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '8px 15px 8px 15px',
    textDecoration: 'none',
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
  },
  headerTitle: {
    paddingRight: 40
  }
})); // NavBar
const NavBar = () => {
  const drawerLinks = [
    { text: 'About', href: '/' },
    { text: 'Projects', href: '#projects' },
    { text: 'Blog', href: '/' },
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
            <Grid item className={classes.navBar} md={12}>
                <Box>
              {/* <img
                onClick={() => props.history.push('/home')}
                style={{ height: 'auto', cursor: 'pointer', marginRight:'50px' }}
                src={require('./logo.svg')}
                alt='HelloHub Logo'
                className={classes.logo}
              /> */}
              <Typography variant='h5' className={classes.headerTitle}>Create.</Typography>
              </Box>
                <Hidden smDown>
                  {drawerLinks.map(
                    (link, i) =>
                      i !== drawerLinks.length + 1 && (
                        <Link key={i} href={link.href} target='_blank' className={classes.navLink}>
                            <Typography>{link.text}</Typography>
                        </Link>
                      )
                  )}
                </Hidden>
            </Grid>
            <Grid container md={6} justify="flex-end" display="contents">
            <Box className={classes.purpleButton}>
                  <Link
                    href='/'
                    target='_blank'
                    className={classes.signUpLink}
                    style={{ textDecoration: 'none' }}>
                    Contact us
                  </Link>
                </Box>
                <IconButton
                  color='inherit'
                  aria-label='Open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}>
                  <MenuIcon />
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
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
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