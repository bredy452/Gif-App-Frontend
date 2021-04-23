import React, { Component } from "react"
import NewForm from './Components/NewForm'
import Logout from './Components/Logout'
import Register from './Components/Register'
import Login from './Components/Login'
import "./App.css"
// import Edit from './Components/Edit'
import ShowGifs from './Components/ShowGifs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom"

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003'
} else {
  baseUrl = 'https://gif10-backend.herokuapp.com'
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      session: false,
      gifs: [],
      sessionUser: {},
      visible: true
    }
  }

  checkLogin = () => {
    console.log(this.state.session)
    let sessionUser = localStorage.getItem('user')
    this.setState({
      sessionUser: sessionUser
    })
  }

  // addUser = (newUser) => {
  //   const copyUser = [...this.state.user]
  //   copyUser.push(newUser)
  //   this.setState({
  //     user: copyUser,
  //   })
  //   this.checkLogin()
  // }

  getUser = () => {
    this.checkLogin()
    this.setState({
      session: !this.state.session
    })
  }

  getGifs = () => {
    fetch(`${baseUrl}/gifs`)
    .then(res => {
      return res.json()})
    .then(data => {
        this.setState({
          gifs: data
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

  addSession = (newSession) => {
    localStorage.setItem('user', JSON.stringify(newSession))
    let sessionUser = localStorage.getItem('user')
    
    // const copySession = [...this.state.user]
    // copySession.push(newSession)
    this.setState({
      user: sessionUser,
      session: true,
      sessionUser: sessionUser
    })
    console.log(this.state.user)
  }

  deleteSession = (deletedSession) => {
    // const findIndex = this.state.user.findIndex(user => deletedSession._id === user._id)
          // const copySession = [...this.state.user]
          // copySession.splice(findIndex, 1)
          localStorage.clear()
          this.setState({
            user: '',
            session: false,
            sessionUser: ''
          })
  }

  register = () => {
    this.setState({
      visible: !this.state.visible
    })
  }


  componentDidMount() {
    this.getGifs()
    this.checkLogin()
  }

  render() {
       let user  = this.state.sessionUser
       // console.log(this.state.gifs)
       //COME BACK TO THIS
    return (

      <>
       <div>
         {(() => {
          if (user) {
            return ([ <div className='container'>
            <h1>The Amazing Giph App!</h1>
           <NewForm baseUrl={baseUrl} addGifs={this.addGif}/>
           <ShowGifs newGif={this.state.gifs} getGifs={this.getGifs} baseUrl={baseUrl}/>
       </div>,
            <Logout getUser={this.getUser} baseUrl={baseUrl} deleteSession={this.deleteSession} />])
              
          }  else {
            if (this.state.visible===true) {

         return ([<Login checkSession={this.checkLogin} baseUrl={baseUrl} addSessions={this.addSession} register={this.register} visible={this.state.visible} />,
              
               ])
              }
             else {
               return(<Register baseUrl={baseUrl} addUser={this.addUser} register={this.register}/>)
            }
          }
         })
         ()}
 ​
      </div>
      
    
      </>
    )
  }
}
