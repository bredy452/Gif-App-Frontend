import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'

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
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(this.props.baseUrl)
        fetch(`${this.props.baseUrl}/gifs`, {
            method: 'POST',
            body: JSON.stringify({
                //below is where the other attributes get put...
                name: this.state.name,
                url: this.state.url,
                description: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then ( res => {
            return res.json()
        }).then ( data => {
            this.props.addGifs(data)
            console.log(data)
            this.setState({
                name: '',
                url: '',
                description: ''
            })
        }).catch(error => console.error)
    }



    render() {
        return (
            <Form onSubmit={ (e) => this.handleSubmit(e)}>
                <Form.Field>
                    <label>NAME:</label>
                    <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} placeholder="add gif" />
                </Form.Field>
                <Form.Field>
                    <label>URL:</label>
                    <input type="text" id="url" name="url" onChange={ (e) => this.handleChange(e)} value={this.state.url} placeholder="URL" />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="description">DESCRIPTION:</label>
                    <input type="text" id="description" name="description" onChange={ (e) => this.handleChange(e)} value={this.state.description} placeholder="description" />
                </Form.Field>
                <Input focus type="submit" value="Add a gif"/>
            </Form>
        )
    }
}
