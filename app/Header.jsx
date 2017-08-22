import React from "react";

// class Header extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render () {
//     var that = this;  
//     return (
//       <h1>This is the Header component</h1>
//     )
//   }
// }

// export default Header;

const Header = (props) => {
	return <div>{props.test}</div>;
}
export default Header;