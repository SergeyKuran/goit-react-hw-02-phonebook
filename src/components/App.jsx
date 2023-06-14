import React, { Component } from 'react';

import { nanoid } from 'nanoid';

// Імпорт компонентів
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

// Імпорт стилів
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

  // // Метод виделення об'єкта з масиву
  deleteObject = id => {
    this.setState(prevetState => {
      return {
        contacts: prevetState.contacts.filter(el => el.id !== id),
      };
    });
  };

  // Метод добавлення об'єкта у масив
  addObject = props => {
    this.setState(prevetState => {
      const name = prevetState.contacts.includes(
        el => el.name.toLowerCase() === props.name.toLowerCase()
      );

      return {
        // Перевірка на введених данних
        contacts: !name
          ? [...prevetState.contacts, props]
          : alert(`${name.name} is already in contacts`),
      };
    });
  };

  // Метод стягування данних при пошуку
  onChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div className={css.phonebook}>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.addObject} />
        </div>
        <div className={css.contacts}>
          <h3>Contacts</h3>
          <Filter filter={filter} onChange={this.onChange} />
          {filter && (
            <ContactList
              contacts={contacts}
              filter={filter}
              deleteObject={this.deleteObject}
            />
          )}
        </div>
      </>
    );
  }
}

export { App };
