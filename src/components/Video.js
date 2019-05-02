import React, { Component } from 'react';
import '../css/Video.css';

class Video extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="add-video">
                    <h3>Add Your Own</h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input type='text' ref={this.props.vidRefInput}></input>
                    <button src="http://www.google.com" type="submit" ref="vidRef">Go!</button>
                    </form>
                </div>
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
                            // src={this.vidRefInput.current.value}
                            src="https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm"
                            type="video/webm"
                        />
                    </video>

                </div>
            </React.Fragment>
        )
    }
}

export default Video;