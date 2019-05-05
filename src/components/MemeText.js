import React, { Component } from 'react';
import '../css/MemeText.css';

class MemeText extends Component {
    constructor() {
        super()
        this.textInput = React.createRef();
        this.state = {
            value: '',
            overlayText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <React.Fragment>
                <form className="overlayInput">
                    <input
                        name="overlayText"
                        type="text"
                        placeholder="Enter text you want to add to your video here"
                        value={this.state.overlayText}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>

            </React.Fragment>
        )
    }
}

export default MemeText;