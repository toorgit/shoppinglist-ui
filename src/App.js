import axios from "axios";
import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';


class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount(){
    axios
      .get("http://localhost:8080/shoppinglists")
      .then(response => {
        const newContacts = response.data.map( c => {
          return {
            id: c.id,
            name: c.name
          };          
        });

        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
