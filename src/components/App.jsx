import { nanoid } from "nanoid";
import React, { Component } from "react";
import  ContactForm  from "./ContactForm/ContactForm.jsx";
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //додавання контакту до списку
  createContacts = data => {
    console.log('data', data);
    // const newContacts = { id: nanoid(), ...data };
    // console.log('newContacts', newContacts);
    const haveNameInPhonebook = this.state.contacts.some(({ name }) => name.toLowerCase() === data.name.toLowerCase());
    if (haveNameInPhonebook) {
      alert(`${data.name} is already in contacts`)
    }
    else {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), ...data }, ...prevState.contacts],
      }));
      console.log('contacts', this.state.contacts);
    }
  };
 //видалення контакту зі списку
  handleDelete = (idContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact)
    }))
  }
      
      
  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleFind = ({target}) => {
    this.setState({ [target.name]: target.value })
      console.log('filter', target.value);;
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleFilter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>
            Phonebook{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </h1>{' '}
          
          <ContactForm createContacts={this.createContacts} />
          <h2>Contacts</h2>
          <Filter value={this.state.filter} filter={this.handleFind} />
          <ContactList
            contacts={visibleFilter}
            onDeleteContact={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
