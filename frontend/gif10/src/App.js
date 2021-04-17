  
import React, { Component } from "react"; 
import NewForm from './Components/NewForm'
import Delete from './Components/Delete'
import Edit from './Components/Edit'
import ShowGifs from './Components/ShowGifs'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3003'
} else {
  baseUrl = 'heroku url here'
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs:[]
    }
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


  render() {
    console.log(this.state)
    return (
     <div className='container'>
       <h1>Helpful Links</h1>
       <NewForm baseUrl={ baseUrl} addGifs={this.addGif}/>
       <ShowGifs newGif={this.state.gifs} />
       <Delete newGif={this.state.gifs} baseUrl={baseUrl} getGifs = {this.getGifs} />
       <Edit newGif={this.state.gifs} baseUrl={baseUrl} getGifs={this.getGifs}/> 
                 
     </div>
    );
  }
}

export default App;