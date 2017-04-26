//functional components - info goes in and jsx comes out
//class components - ability for component to have record keeping, aware of what's happened to it since rendered

import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />         this is a functional components
// };                         next is a class-based component

class SearchBar extends Component {  //searchbar now has all functionality that react.component has
  render() {  //every class based must have a render method
    return <input onChange={event => console.log(event.target.value)} />;  //return some jsx
  }
}

export default SearchBar;
