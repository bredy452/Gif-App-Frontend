import React, { Component } from 'react'

export default class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.name,
            url: this.props.url,
        }
        // this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault()
        //fetch and update props{addBookmark in app}
        console.log(this.state)
        console.log(this.props.id)
        fetch(`${this.props.baseUrl}/gifs/${this.props.id}`,  {
            method: 'PUT', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                name: this.state.name,
                url: this.state.url,
                id: this.props.id
            }),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.getGifs()
        }).catch(error => console.error)
    }

  

    render() {
        return (
            <>
            <form onSubmit={ (e) => this.handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} placeholder="add helpful gif" />
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" onChange={ (e) => this.handleChange(e)} value={this.state.url} placeholder="URL" />
                <input type="submit" value="Update Gif"/>
            </form>
            </>
        )
    }
}