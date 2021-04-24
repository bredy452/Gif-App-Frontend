import React, { Component } from 'react'
​
export default class Logout extends Component {
  
        constructor(props) {
            super(props)
            this.state = {
                user: this.props.user
        }
    }
​
deleteSubmit = (e) => {
    e.preventDefault()
    fetch(`${this.props.baseUrl}/sessions/signout`, {
        method: 'DELETE', 
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
        localStorage.removeItem('user')
        console.log(data)
        this.props.deleteSession(data)
        this.setState({
            user:[]
            })              
    }).catch(error => console.error)
}
​
​
    render() {
        return (
            <>
            <button onClick={ (e) => this.deleteSubmit(e)}> Logout </button>
            </>
        )
    }
}