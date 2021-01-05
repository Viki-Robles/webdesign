import React, { useState } from "react";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    input: {
        width: '250px',
        marginBottom: '40px',
        
    },
    buttonContainer: {
        justifyContent:'center',
        marginBottom:'40px',
    },
    button:{
        textTransform:'none',
        color:'white',
        backgroundColor:'black'

    },
    typography: {
        marginTop:'100px',
        justifyContent:'center',
        marginBottom:'40px'
    },
    formTitle :{
        fontWeight: 'bold',
        color:'black'
    },
    formBox:{
        width:'100%',
        margin:'0 auto',
        border:'3px solid #242424',
        borderRadius:'50% 50% 0 0',
        marginTop:'80px',
        backgroundColor:'yellow',
        [theme.breakpoints.up('md')]: {
            width:'70%'
        }
    }
}))

export default function Form() {
    const classes = useStyles();
    const [formState, setFormState] = useState({ name: '', email: '' })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
        <>
        <Grid className={classes.formBox}>
            <Grid container className={classes.typography}>
            <Typography variant='h5' component='h5' className={classes.formTitle}>Let's work together...</Typography>
            </Grid>
            <form
                onSubmit={handleSubmit}
                method="post"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <Grid container direction='column' className={classes.container} alignItems='center'>
                    <Grid sm={12} lg={12}>
                        <Input
                            type='email'
                            placeholder='Email'
                            id='email'
                            name='email'
                            fullWidth
                            onChange={handleChange}
                            value={formState.email}
                            className={classes.input} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            type='text'
                            name='name'
                            className={classes.input}
                            placeholder='Message'
                            id='name'
                            onChange={handleChange}
                            value={formState.name} />
                    </Grid>
                </Grid>
                <Grid container className={classes.buttonContainer}>
                <Button variant="outlined" color={"primary"} type='submit' className={classes.button}>Submit</Button>
                </Grid>
            </form>
            </Grid>
        </>
    );
}

