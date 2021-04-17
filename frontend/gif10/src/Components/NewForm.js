import React, { Component } from 'react'

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            url: '',
            description: ''
        }
        // this.handleChange = this.handleChange.bind(this)
    }


    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault()
        //fetch and update props{addBookmark in app}
        console.log(this.props.baseUrl)
        fetch(`${this.baseUrl}/gifs`, {
            method: 'POST', 
            body: JSON.stringify({
                //below is where the other attributes get put...
                name: this.state.name,
                url: this.state.url,
                descrption: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.addGifs(data)
            this.setState({
                name: '',
                url: '',
                description: ''
                })
        }).catch(error => console.error)
    }

  

    render() {
        return (
            <form onSubmit={ (e) => this.handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} placeholder="add gif" />
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" onChange={ (e) => this.handleChange(e)} value={this.state.url} placeholder="URL" />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" onChange={ (e) => this.handleChange(e)} value={this.state.description} placeholder="description" />
                <input type="submit" value="Add a gif"/>
            </form>
        )
    }
}