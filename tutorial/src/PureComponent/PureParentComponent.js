import React, { Component } from 'react'
import ChildPureComponent from './ChildPureComponent'

export default class PureParentComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: "Hello"
        }
    }

    updateData = () => {
        this.setState({ data: "Hello" })
    }

    render() {
        console.log('Parent Pure Component rendering');
        return (
            <div>
                <button onClick={() => { this.updateData() }}>parent component button</button>
                <ChildPureComponent data={this.state.data} />
            </div>
        )
    }
}
