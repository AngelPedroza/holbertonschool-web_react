import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" className={css(style.input)}/>

            <label htmlFor="password">Password:</label>
            <input id="password" name="password" className={css(style.input)}/>
            <button>OK</button>
        </>
    );
}

const style = StyleSheet.create({
    input: {
        margin: '0 10px',
    },
})

export default Login;