  
import React, { Component } from "react"; 
import NewForm from './Components/NewForm'
// import Edit from './Components/Edit'
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
    console.log(baseUrl)
    return (
     <div className='container'>
       <h1>The Amazing Giph App!</h1>
       <NewForm baseUrl={baseUrl} addGifs={this.addGif}/>
       <ShowGifs newGif={this.state.gifs} baseUrl={baseUrl}/>

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
    );
  }
}

export default App;