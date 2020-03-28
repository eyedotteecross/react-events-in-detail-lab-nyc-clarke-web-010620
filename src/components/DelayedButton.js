// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
    handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {this.props.onDelayedClick(event)},this.props.delay)
    } 
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    DELAYED BUTTON
                </button>
            </div>
        )
    }
}