import React, { Component } from 'react';
import '../css/Video.css';

class Video extends Component {
    render() {
        return (
            <div class="video-wrapper">
                <video
                    width="800"
                    height="450"
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm"
                        type="video/webm"
                    />
                </video>
            </div>
        )
    }
}

export default Video;