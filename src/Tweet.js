import React, { Component } from 'react';
import Date from './Date';

class Tweet extends Component {
	render() {
		let tweet = this.props.tweet;
		let dateoptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
		let datestring = tweet.time.toLocaleDateString('en-US', dateoptions);
		let timestamp = tweet.time.toLocaleTimeString();

		return (
			<div className="f7 ma2 mw6-ns left bg-washed-yellow pa2 ph2 pv2 bb mid-gray b--yellow">
				<div className="cf">
					<div className="fl w-70 w-80-ns ph1 tl">
					{tweet.text}
						<Date className="fl f7" tweet={tweet} datestring={datestring} timestamp={timestamp}/>
					</div>
					<div name="thumbs_up" className="fl w-5 pa1 ma1">
						<div className="thumbs-up"
						onClick={() => this.props.handleLike(tweet)}>
						{tweet.liked ? <i className="fas fa-thumbs-up blue"></i> : <i className="fas fa-thumbs-up lightest-blue"></i>}
						</div>
					</div>
					<div name="retweet" className="fl w-5 pa1 ma1">
						<i className="fas fa-retweet blue"></i>
					</div>
					<div name="delete" className="fl w-5 pa1 ma1"
						onClick={() => this.props.deleteTweet(tweet)}>
						<i className="fas fa-trash light-red"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Tweet;