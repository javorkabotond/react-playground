import React, { Component } from 'react'

export class Messages extends Component {
    constructor(){
        super()
        this.state = {
            messages: 'Welcome visitors'
        }
    }

    changeMessage() {
        this.setState({
            messages: 'Thank you for subscribing'
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.messages}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Messages
