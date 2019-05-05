import React, { Component } from 'react';


class AddVideo extends Component {
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

  render() {
    return(
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
    )
  }
}

export default AddVideo;