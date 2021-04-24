import React, { Component } from 'react'

export default class Gifs extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
            
              <img src={this.props.gif.images.fixed_height_small.url} alt={this.props.gif.Title}></img>
              
            </>
        )
    }
}
