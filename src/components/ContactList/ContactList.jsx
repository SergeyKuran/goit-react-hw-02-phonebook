import React from 'react';
import PropTypes from 'prop-types';

import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
