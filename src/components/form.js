import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormatShapesTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        margin: '0 auto'
    },
    formControl: {
        backgroundColor: 'yellow',
        paddingTop: '100px',
        marginTop: '200px'
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
        backgroundColor: 'yellow',
        paddingBottom: '100px'

    },
    typography: {
        padding: '20px',

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
            <form
                onSubmit={handleSubmit}
                method="post"
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <Textfield
                    type='email'
                    placeholder='Email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={formState.email} />
                <TextField
                    type='text'
                    name='name'
                    placeholder='Leave your message here'
                    id='name'
                    onChange={handleChange}
                    value={formState.name}/>
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

