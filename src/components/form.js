import { TextField } from "@material-ui/core";
import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        margin: '0 auto'
    },
    formControl: {
        backgroundColor: '#EDFF00',
        paddingTop: '100px',
        marginTop:'200px'
    },
    textfield: {
        padding: '10px',
        color: 'white'
    },
    button: {
        color: 'white',
        backgroundColor: 'black',
        textTransform: 'none',
        margin: '0 auto'
    },
    buttonContainer: {
        textAlign: 'center',
        backgroundColor: '#EDFF00',
        paddingBottom: '100px'

    }
}))

export default function Form() {
    const classes = useStyles();

    return (
        <>
            <Grid md={12} className={classes.formControl}>
                <form>
                    <Grid container direction='column' md={3} className={classes.formContainer}>
                        <TextField
                            className={classes.textfield}
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            color={'primary'}>Name</TextField>
                        <TextField
                            className={classes.textfield}
                            id="lastName"
                            label="Last Name"
                            variant="outlined"

                        >Last Name</TextField>
                        <TextField id="email"
                            className={classes.textfield}
                            label="Email"
                            variant="outlined"
                            color={'primary'}>Email</TextField>
                    </Grid>
                </form>
            </Grid>
            <Grid container className={classes.buttonContainer}>
                <Button variant="contained" color={'primary'} className={classes.button}>Send</Button>
            </Grid>
        </>
    )
}

