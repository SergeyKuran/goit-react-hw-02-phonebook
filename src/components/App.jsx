import React, { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import css from '../components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addFilter(evt) {
    this.setState({
      filter: evt.target.value,
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <div className={css.phonebook}>
          <h2>Phonebook</h2>
          <ContactForm />
        </div>
        <div className={css.contacts}>
          <h3>Contacts</h3>
          <Filter filter={this.addFilter} value={this.state.filter} />
          <ContactList contacts={contacts} />
        </div>
      </>
    );
  }
}

export { App };
