// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
     render() {
        return (
            <div>
            <button onClick={event => {this.props.onReceiveCoordinates([event.clientX,event.clientY])}}>COORDINATES</button>    
            </div>
        )
    }
}
