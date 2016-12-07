import React from 'react';

import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Body />
            <Footer />
         </div>
      );
   }
}

export default App;