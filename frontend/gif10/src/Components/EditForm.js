import React, { Component } from 'react'

export default class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.name,
            url: this.props.url,
            description: this.props.description
        }
        // this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props.baseUrl)
        //fetch and update props{addBookmark in app}
        console.log(this.state)
        console.log(this.props.id)
        console.log(this.props.description)
        fetch(`${this.props.baseUrl}/gifs/${this.props.id}`,  {
            method: 'PUT', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                name: this.state.name,
                url: this.state.url,
                description: this.state.description,
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
                <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} placeholder="Name" />
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" onChange={ (e) => this.handleChange(e)} value={this.state.url} placeholder="Url" />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" onChange={ (e) => this.handleChange(e)} value={this.state.description} placeholder="Description" />
                <input type="submit" value="Update Gif"/>
            </form>
            </>
        )
    }
}