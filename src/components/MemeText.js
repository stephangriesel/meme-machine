import React, { Component } from 'react';
import '../css/MemeText.css';

class MemeText extends Component {
    render() {
        return (
            <label>
                Meme text:
                  <input type="text" placeholder="Something edgy..." />
            </label>
        )
    }
}

export default MemeText;