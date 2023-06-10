import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({ value }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
