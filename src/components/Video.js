import React, { Component } from 'react';
import '../css/Video.css';
import snowflakes from '../img/snowflakes.gif'


class Video extends Component {
    constructor(props) {
        super(props)

        this.textInput = React.createRef();
        this.state = {
            value: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: this.textInput.current.value })
    };

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="center">
                    <p>Here are some demo videos:</p>
                    <p><a href="http://dl3.webmfiles.org/big-buck-bunny_trailer.webm">Demo #1</a></p>
                    <p><a href="http://dl3.webmfiles.org/elephants-dream.webm">Demo #2</a></p>
                    <p>Your video: {this.state.value}</p>
                </div>
                <div className="add-video">
                    <h3>Add Your Own</h3>
                    <form onSubmit={(e) => { e.preventDefault(); this.setState({ showVideo: true }) }}>
                        <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                        <button type="submit" value="submit">Go!</button>
                    </form>

                </div>
                <div className="video-wrapper">
                    {this.state.showVideo ?
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
                        :
                        <div >
                        <img className="vidPlaceholder" src={snowflakes} />;
                        </div>
                        }
                </div>
            </React.Fragment >
        )
    }
}

export default Video;