import React from 'react';

class App extends React.Component {
   	render() {
   		var i = 1;
   		var myStyle = {
   			fontSize: 20,
   			color: 'red'
   		};

		return (
         	<div>
            	<h1>Header</h1>
            	<h3>Subtitle</h3>
            	<p data-attribute="somevalue" style={myStyle}>
            		{/* this line is colored*/}
            		This is sooooo { i == 1 ? 'NICE!' : 'BAD!' }            		
            	</p>
         	</div>
      	);
   	}
}

export default App;