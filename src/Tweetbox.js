import React, { Component } from 'react';

class Tweetbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      charsRemaining: 140
    }
  }

  handleChange(text) {
    this.setState(
      { text: text,
        charsRemaining: 140 - text.length
      });
  }

  render() {
    return (
      <div className='Tweetbox'>
        <div className="tweetboxarea mw9  bg-dark-blue">
        <div className="cf ph2-ns ">
          <div className="statuscontainer fl w-100 w-75-ns pa0">
            <textarea
              className="f7 input-reset pa1 ma0 ba lh-copy shadow-1 shadow-outline bg--transparent b--white-20 w-100"
              placeholder={this.props.prompt}
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <label className="inside_counter">
              {this.state.charsRemaining}
            </label>
          </div>
          <div className="fl pb2 w-100 w-25-ns">
        <button 
          className="f6 link dim ph3 shadow-1 pv2 dib white bg-blue pointer"
          onClick={() => this.props.onTweet(this.state.text)}
          disabled={this.state.charsRemaining < 0}
          > Tweet </button>
          </div>
          </div>
          </div>
      </div>     
    );
  }
}

export default Tweetbox;
