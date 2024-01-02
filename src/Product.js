import React, { Component } from 'react'

export default class Product extends Component {
    constructor() {
        super()
        this.state = {
            data: "prince"
        }

    }
    componentDidUpdate() {
        console.log("component Did updated call")
    }
    componentDidMount(){
        console.log("call components did mount")
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Hello Class base components</h1>
                <h1>Hello {this.state.data}</h1>
                <button onClick={() => this.setState({ data: "raj" })}>CLick Me</button>
            </div>
        )
    }
}
