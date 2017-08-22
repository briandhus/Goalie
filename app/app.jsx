var React = require('react');
// var Header123 = require('./Header123.jsx');
import Header from './Header.jsx';
var Main = require('./mainR.jsx');

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render (){  
    return(
      <div>
    	<h1>This is the app component</h1>
    	<Header test='hey'/>
      </div>
   )};
}

export default App;