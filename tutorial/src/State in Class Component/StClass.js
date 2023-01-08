import { Component } from "react";

export default class StClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'hello everyOne'
        }
    }

    render() {
        return (
            <>
                {this.state.message}
            </>
        )
    }







}