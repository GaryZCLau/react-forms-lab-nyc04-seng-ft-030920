import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
