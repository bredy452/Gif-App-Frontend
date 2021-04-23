import React, { Component } from 'react'
export default class Logout extends Component {
        constructor(props) {
            super(props)
            this.state = {
                user: this.props.user
            }
        }
    deleteSubmit = (e) => {
    console.log(this.state.user)
    // e.preventDefault()
    fetch(`${this.props.baseUrl}/sessions/signout`, {
        method: 'DELETE',
        // body: JSON.stringify({
        //     //below is where the other attributes get put...
        //     username: this.state.username,
        //     password: this.state.password,
        // }),
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
            sessionUser:''
            })
    }).catch(error => console.error(error))
    .finally(() => {
    
    })
    this.props.deleteSession()
}
    render() {
        console.log(this.props.user)
        return (
            <>
            <button onClick={this.deleteSubmit}> Logout </button>
            </>
        )
    }
}