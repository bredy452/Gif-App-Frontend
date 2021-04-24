import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUsername:'',
            loginPassword:'',
        }
        }

   handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
     
        console.log(this.state)
        console.log(this.props.baseUrl)
        fetch(`${this.props.baseUrl}/sessions`, {
            method: 'POST', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                username: this.state.loginUsername,
                password: this.state.loginPassword,
            }),
                headers: {
                    'Content-Type': 'application/json'
                },
                'credentials': 'include'
        }).then ( res => {
            return res.json()
        }).then ( data => {
            console.log(data)
            this.props.addSessions(data)
            this.setState({
                loginUsername: '',
                loginPassword: '',
                })              
        }).catch(error => console.error)
    }



    render() {
        return (
            <>
            <div>
                <h1>Login</h1>
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                <label htmlFor="loginUsername">Username:</label>
                <input type='text' id="username" name="loginUsername" onChange={ (e) => this.handleChange(e)} value={this.state.loginUsername} placeholder='username' />
                <label htmlFor="loginPassword">Password:</label>
                <input type='password' name="loginPassword" onChange={ (e) => this.handleChange(e)} value={this.state.loginPassword} placeholder='password'/>
                <input type='submit' value='submit' />
                </form>
                </div>
                </>
        )
    }
}
