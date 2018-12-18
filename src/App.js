import React, { Component } from 'react';
import DropDownCountry from './Components/DropDownCountry';
import DropDownCity from './Components/DropDownCity';
import './App.css';


//This is react app created "npx create-react-app" it's contain DropDownCountry & DropDownCity components
//state data contain country and city objects.
//algorithm: When selected first dropdown it will call handleChange method which changes containing country's object value and after that
//selecting the second dropdown it's calling handleSubmit method which returns the first dropdown's selected option value's
//according city's array link property it's generate new object according countries' value.
//DropDownCountry and DropDownCity components render outputs elements with countrySelect and citySelect functions (argument is props)


class App extends Component {
  state = {
    value: '',
    selectedCity: {},
    country: [
      {value: 'eng', label: 'England'},
      {value: 'fr', label: 'France'},
      {value: 'it', label: 'Italy'},
      {value: 'sp', label: 'Spain'},
    ],
    city: [
      {value: 'london', label: "London", link: "eng"},
      {value: 'liverpool', label: "Liverpool", link: 'eng'},
      {value: 'manchester', label: 'Manchester', link: 'eng'},
      {value: 'paris', label: 'Paris', link: 'fr'},
      {value: 'lyon', label: 'Lyon', link: 'fr'},
      {value: 'cannes', label: 'Cannes', link: 'fr'},
      {value: 'rome', label: 'Rome', link: 'it'},
      {value: 'venice', label: 'Venice', link: 'it'},
      {value: 'milan', label: 'Milan', link: 'it'},
      {value: 'madrid', label: 'Madrid', link: 'sp'},
      {value: 'valencia', label: 'Valencia', link: 'sp'},
      {value: 'granada', label: 'Granada', link: 'sp'}
    ]
  };

  //handleChange method updates the first select option
  handleChange = (event) => {
    for (let i = 0; i < this.state.country.length; i++) {
     this.setState({
       value: event.target.value
     })
    }
  };

  //when submited the second dropdown handleSubmit method returns according option with first selected element
  handleSubmit = (event) => {
    for (let i = 0; i < this.state.city.length; i++) {
      if (this.state.country[i].value === this.state.city[i].link) {
        const selected = this.state.city.filter(li => li.link === this.state.country[i].value);
        this.setState({
          selectedCity: selected[i].label
        })
      }
    }
    event.preventDefault();
  };

  render() {
    const style = {
      display: "inline-block",
    };

    return (
      <div className="App">
        <h1>Drop-Down List in React!!!</h1>
        <div style={style}>
          <DropDownCountry
               label1={this.state.country[0].label}
               label2={this.state.country[1].label}
               label3={this.state.country[2].label}
               label4={this.state.country[3].label}
               onchange={this.handleChange}/>
        </div>
        <div style={style}>
          <DropDownCity
               value={this.state.selectedCity.value}
               onsubmit={() => this.handleSubmit()}/>
        </div>
      </div>
    );
  }
}

export default App;
