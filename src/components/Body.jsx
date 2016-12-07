import React from 'react';

import Comment from './Body/Comment.jsx';
import Content from './Body/Content.jsx';

class Body extends React.Component {
	render() {
		return (
			<div>
				<Content />	
				<Comment />	
			</div>
		)
	}
}

export default Body;