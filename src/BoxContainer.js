import React, {Component} from 'react';
import {choice} from "./helpers"
import "./css/BoxContainer.css";
import Box from "./Box";

class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: ["purple", "magenta", "lilac", "pink"]
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Box colors={this.props.allColors}/>
        ))
        return (
            <div className="box-container">{boxes}</div>
        )
    }
}

export default BoxContainer;