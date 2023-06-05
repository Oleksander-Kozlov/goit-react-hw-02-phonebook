import { nanoid } from "nanoid";
import React, { Component } from "react";



export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  createContacts = (data) => {
    console.log("data", data);
    const newContacts = {
      ...data, id: nanoid()
    }
    console.log('newContacts', newContacts);
  }
  handleSabmit = e => {
    e.preventDefault();
    this.createContacts({
      name: this.state.name,
    });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSabmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
            <button type="submit">add contacts</button>
          </form>
        </div>
      </div>
    );
  }
};
