import React, { Component } from 'react';
import '../css/Video.css';

class Video extends Component {

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="add-video">
                    <h3>Add Your Own</h3>
                    <form>
                        <input type='text'></input>
                    <button type="submit">Go!</button>
                    </form>
                </div>
                <p>Your video: {this.props.src.src}</p>
                <div className="video-wrapper">

                    <video
                        maxwidth="800"
                        width="100%"
                        height="450"
                        playsInline
                        autoPlay
                        muted
                        loop
                    >
                        <source
                            src={this.props.src.src}
                            type="video/webm"
                        />
                    </video>

                </div>
            </React.Fragment>
        )
    }
}

export default Video;