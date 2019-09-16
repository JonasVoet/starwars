import React, { Component } from 'react';
import axios from 'axios';
import List from './component/List';

class App extends Component {
  constructor(props) {
  //  super() calls the parent constructor
    super(props);

    // empty array, it gets filled when we get swapi api
    this.state = {
      people: []
    }

    // Bind into a function
    this.getPeople = this.getPeople.bind(this);
  }
  
  // Request to API to give us the data of people
  getPeople() {
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
      // slice, slices the data down, in this case 5 people from star wars
      this.setState( {people: response.data.results.slice(0,6)})
      // console.log("species",response.data.results.species);

    })
  }


  componentDidMount() {
    this.getPeople()
  }
  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
}

export default App;
