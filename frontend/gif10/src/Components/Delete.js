import React, { Component } from 'react'
// I was thinking of using this button on other forms, but didn't


export default class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.id
        }
    }

     handleSubmit = (e) => {
        e.preventDefault()
        //fetch and update props{addGifs in app}
        console.log(this.state)
        fetch(`${this.props.baseUrl}/gifs/${this.state._id}` , {
            method: 'DELETE', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                _id: this.props.id
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.getBookmarks()
        }).catch(error => console.error)
    }

  

    render() {
        console.log(this.state._id)
        return (
                <i id="_id"  name="_id" onClick={ (e) => this.handleSubmit(e)} type="submit" value={this.state._id} style={{cursor:'pointer'}} className="trash icon"></i>
        )
    }
}