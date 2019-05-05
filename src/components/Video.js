import React, { Component } from 'react';
import AddVideo from './AddVideo';

import '../css/Video.css';
import snowflakes from '../img/snowflakes.gif';
import html2canvas from 'html2canvas';


class Video extends Component {
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

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: this.textInput.current.value })
    };

    // html2canvas(){
    //     document.body.appendChild(canvas)
    //     console.log("download clicked")
    // }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {/* <div className="demo-vids center">
                    <p>Here are some demo videos:</p>
                    <p><a href="http://dl3.webmfiles.org/big-buck-bunny_trailer.webm">Demo #1</a></p>
                    <p><a href="http://dl3.webmfiles.org/elephants-dream.webm">Demo #2</a></p>
                </div> */}
                <div>
                    <form
                        className="add-video"
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.setState({
                                showVideo: true
                            })
                        }}>
                        <input
                            placeholder="Add your video"
                            type="text"
                            value={this.state.value}
                            onChange={(e) => this.setState({
                                value: e.target.value
                            })}
                        />
                        <button type="submit" value="submit">Go!</button>
                    </form>
                </div>
                <div className="video-wrapper">
                    {this.state.showVideo ?
                        <React.Fragment>
                            <video
                                className="video-display"
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
                            <h2 className="overText">
                                {this.state.overlayText}
                            </h2>
                        </React.Fragment>
                        :
                        <div >
                            <img className="vid-placeholder" src={snowflakes} alt="Snowflakes" />
                        </div>
                    }
                </div>
                <div>
                    <form className="overlayInput">
                        <input
                            name="overlayText"
                            type="text"
                            placeholder="Enter text you want to add to your video here"
                            value={this.state.overlayText}
                            onChange={this.handleChange}
                        />
                        <div className="buttons-row">
                            <button>Add</button>
                            <button onClick={this.html2canvas}>Download</button>
                        </div>
                    </form>

                </div>
            </React.Fragment >
        )
    }
}

export default Video;