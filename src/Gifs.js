import React, { Component } from 'react'
import Gif from './Gif'
export default class Gifs extends Component {
render() {
return (
<div className="row">
    {(this.props.gif)
    ? this.props.gif.map((gif, i) => {
    return (

    <Gif gif={gif} key={i} />
    )
    })
    : ''
    }

</div>
)
}
}