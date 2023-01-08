import React, { Component, PureComponent } from 'react'

export default class ChildPureComponent extends PureComponent {


    constructor(props) {
        super(props)
    }


    render() {
        console.log('child pure component renders');
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}
