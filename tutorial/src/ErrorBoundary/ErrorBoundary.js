import React, { Component } from 'react'

export default class ErrorBoundary extends Component {


    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log('xxxxxxxxxxxxxxxxxxx')
        return { hasError: true }
    }

    componentDidCatch(error, info) {

    }

    render() {

        if (this.state.hasError) {
            return (
                <div>
                    Something went wrong
                </div>
            )
        }
        else {
            return (this.props.children)
        }

    }
}
