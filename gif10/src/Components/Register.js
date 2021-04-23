import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registerUsername:'',
            registerPassword:'',
            registerFN: '', 
            registerLN: ''
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
        fetch(`${this.props.baseUrl}/users`, {
            method: 'POST', 
            body: JSON.stringify({

                username: this.state.registerUsername,
                password: this.state.registerPassword,
                firstName: this.state.registerFN,
                lastName: this.state.registerLN
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.addUsers(data)

            this.setState({
                registerUsername: '',
                registerPassword: '',
                registerFN: '', 
                registerLN: ''
                })
        }).catch(error => console.error)
         this.props.register()
    }

    render() {
        return (
            <>
            <div>
                <h1>Register</h1>
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                <label htmlFor="registerUsername">Username:</label>
                <input type='text' id="username" name="registerUsername" onChange={ (e) => this.handleChange(e)} value={this.state.registerUsername} placeholder='username' />
                <label htmlFor="registerpassword">Password:</label>
                <input type='password' name="registerPassword" onChange={ (e) => this.handleChange(e)} value={this.state.registerPassword} placeholder='password'/>
                <label htmlFor="registerFN">first name:</label>
                <input type='text' name="registerFN" onChange={ (e) => this.handleChange(e)} value={this.state.registerFN} placeholder='first name'/>
                <label htmlFor="registerLN">last name:</label>
                <input type='text' name="registerLN" onChange={ (e) => this.handleChange(e)} value={this.state.registerLN} placeholder='last name'/>
                <input type='submit' value='submit' />
                </form>
                </div>
                </>
        )
    }
}
