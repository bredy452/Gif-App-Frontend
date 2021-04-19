  
import React, { Component } from "react"; 
import NewForm from './Components/NewForm'
import Logout from '/Components/Logout'
import Register from '/Components/.js'
import Login from '/Components/.js'
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
  baseUrl = 'heroku url here'
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      session: false,
      gifs:[]
    }
  }

  checkLogin = () => {
    console.log(this.state.session)
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
          session: false
        })
  }

  


  componentDidMount() {
    this.getGifs()
  }


  render() {
    console.log(this.state)
    console.log(baseUrl)

    return (
  
 //      <div  >
 //        {(() => {
 //          if (user) {
 //            return <Logout getUser={this.getUser} baseUrl={baseUrl} deleteSession={this.deleteSession} user={this.user} />
 //          } else {
 //              return <Login baseUrl={baseUrl} addSessions={this.addSession} />   
 //          }
 //        })
 //        ()}
 //    {/* <Logout getUser={this.getUser} baseUrl={baseUrl} user={this.user[0]} /> 
 // <Login baseUrl={baseUrl} addSessions={this.addSession} />  */}
 //      <Register baseUrl={baseUrl} addUser={this.addUser}/>

 //      </div>

      <div className='container'>
           <h1>The Amazing Giph App!</h1>
          <NewForm baseUrl={baseUrl} addGifs={this.addGif}/>
          <ShowGifs newGif={this.state.gifs} getGifs={this.getGif} baseUrl={baseUrl}/>

          {/*<Delete newGif={this.state.gifs} baseUrl={baseUrl} getGifs={this.getGifs} />
       <Edit newGif={this.state.gifs} baseUrl={baseUrl} getGifs={this.getGifs}/> */}
                 
           {/*<table>
         <tbody>
           {this.state.gifs.map(gif => {
             return (
               <tr key={gif._id}>
                 <td>{gif.name}</td>
                <td><a href={gif.url}></a></td>
                 <td>
                   < Delete id={gif._id} baseUrl = {baseUrl} getGifs = {this.getGifs} />
                 </td>
                 <td>
                  < Edit id={gif._id} baseUrl = {baseUrl} name={gif.name} url={gif.url} getGifs={this.getGifs}/> 
                 </td>
               </tr>
             )
           })}
         </tbody>
           </table>*/}
      </div>
    )
  }
}


















     