var React = require('react');
var Header = require('./header.js');
var Main = require('./mainR.js');

class App extends React.Component {

  constructor(props){
    super(props);
  }


  render () {  
    return (
      <div>
    	<h1>This is the app component</h1>
      	<Header />
      	<Main />
      </div>
    )
  }
}

export default App;