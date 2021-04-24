import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Logout from './Logout'
import Register from './Components/Register.js'
import Login from './Components/Login.js'
import NewForm from './Components/NewForm'
import ShowGifs from './Components/ShowGifs'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003'
} else {
  baseUrl = 'heroku url here'
}






export default class App extends Component {

constructor(props) {
super(props)
  this.state = {
    user: [],
    session: [],
    gifs: [],
    sessionUser: ''
  }
}

checkLogin = () => {
console.log(this.state.session)
let sessionUser = localStorage.getItem('user')
console.log(sessionUser)
this.setState({
  sessionUser: sessionUser
})
  }


addUser = (newUser) => {
  
  const copyUser = [...this.state.user]
  copyUser.push(newUser)
  this.setState({
    user: copyUser,
  })
  
}

getUser = () => {
  console.log(this.state.user)
  this.checkLogin()
  this.setState({
    session: !this.state.session
  })
}


getGifs = () => {
  fetch(`${baseUrl}/gifs`).then(res => { 
    return res.json()}).then(data => {
      this.setState({
        gifs: data,
    })
  })
}

addGif = (newGif) => {

  const copyGifs = [...this.state.gifs]
  copyGifs.push(newGif)
  this.setState({
    gifs: copyGifs,
    name: ''
  }) 
}




componentDidMount() {
  this.getGifs()
}

addSession = (newSession) => {
  console.log("addsess")
  
  const copySession = [...this.state.user]
  copySession.push(newSession)
  this.setState({
    user: copySession,
    session: true
  })
}

deleteSession = (deletedSession) => {
  const findIndex = this.state.user.findIndex(user => deletedSession._id === user._id)
        const copySession = [...this.state.user]
        copySession.splice(findIndex, 1)
        this.setState({
          user: copySession,
          session: false,
          sessionUser: ''
        })
}

componentDidMount() {
  this.checkLogin()
}



render() {
  
  let user  = this.state.sessionUser
  

return (
  <>
<div  >

{(() => {
  if (user) {
    return <Logout getUser={this.getUser} baseUrl={baseUrl} deleteSession={this.deleteSession} user={this.user} /> 
     
  } else {
    return <Login checkSession={this.checkLogin} session= {this.session} baseUrl={baseUrl} addSessions={this.addSession} />
    
  }
})()}
 {/* <Logout getUser={this.getUser} baseUrl={baseUrl} user={this.user[0]} /> 
 <Login baseUrl={baseUrl} addSessions={this.addSession} />  */}
 
 <Register baseUrl={baseUrl} addUser={this.addUser}/>

</div>
</>
)

}
}