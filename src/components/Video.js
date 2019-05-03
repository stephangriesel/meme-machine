import React, { Component } from 'react';
import '../css/Video.css';


class Video extends Component {
    constructor(props) {
        super(props)

        this.textInput = React.createRef();
        this.state = {
            value: 'https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm'
        }
    }

        handleSubmit = e => {
            e.preventDefault();
            this.setState({ value: this.textInput.current.value })
        };
        render() {
            console.log(this.props);
            return (
                <React.Fragment>
                    <div className="add-video">
                        <h3>Add Your Own</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                ref={this.textInput}>
                            </input>
                            <button type="submit" value="submit">Go!</button>
                        </form>
                    </div>
                    <p>Your video: {this.state.value}</p>
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
                                src={this.state.value}
                                type="video/webm"
                            />
                        </video>

                    </div>
                </React.Fragment>
            )
        }
    }

    export default Video;