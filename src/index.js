import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // './' represents current directory
//Create some new component.  This component should produce some html

const API_KEY = 'AIzaSyBvACVPVT2BJ0YqO0R6lXtyofcSZrQfBNE';

const App = () => { //this is a class of a component
    return (
      <div >
          <SearchBar />
      </div>
    )
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render( < App / > , document.querySelector('.container')); //first argument is the class instance, second
//argument is the target DOM element to put the instance into
