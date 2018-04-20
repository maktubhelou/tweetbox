import React, { Component } from 'react';
import Tweetbox from './Tweetbox';
import Tweet from './Tweet';
import 'tachyons';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "It's like... so good it's bigly.",
          liked: true,
          time: new Date()
        },
        {
          text: "It's even capable of out-tweeting Donald Trump",
          liked: false,
          time: new Date()
        },
        {
          text: "This is a Tweet App that tweets tweets",
          liked: true,
          time: new Date()
        }
      ],
      tweetPrompt: "What's your status?"
    }
  }

  handleTweet(tweetText) {
    if(tweetText) {
      let tweetObj = {
        text: tweetText,
        liked: false,
        time: new Date()
      }    
      this.setState({
        tweets: this.state.tweets.reverse().concat(tweetObj),
      })
    }
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.reverse().map( (t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked,
          time: t.time
        }
      }
      return t;
    });

    this.setState({
      tweets
    })
  }

  deleteTweet(tweet) {
    let tweets = this.state.tweets;
    let t = tweets.indexOf(tweet);
    tweets.splice(t,1);
    this.setState({
      tweets: this.state.tweets.reverse()
    })
  }


  render() {
    return (
      <div className="App tc bodini">
        <header>
        <div className="">
         
          <div className="pa4 bg-lightest-blue navy ">
          <h2>Welcome to the Awesomest Tweetbox that ever Tweetboxed!</h2>
          </div>
          <div className="w-100 pa1 dt v-mid tc fl w-25 avatar">
            <img
                src="http://tachyons.io/img/logo.jpg"
                className="h3 v-mid w3 dib" alt="avatar" />
          </div>
        </div>
        </header>
        <div>
          <Tweetbox prompt={this.state.tweetPrompt} onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
          { this.state.tweets.reverse().map( (tweet) => (
              <Tweet 
                tweet={tweet}
                handleLike={this.handleLike.bind(this)}
                deleteTweet={this.deleteTweet.bind(this)}
              />)
          )}
        </div>
      </div>
    );
  }
}

export default App;
