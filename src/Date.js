import React from 'react';

const Date = ({tweet, datestring, timestamp}) => {

	return(
		<div className="fw1 light-blue">
			<p className="pv0 mb0">{timestamp} | {datestring}</p>
		</div>
	)
}

export default Date;