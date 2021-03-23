import React from 'react';
import PropTypes from 'prop-types';
import path from 'path';

import css from './style.css';

const Header = ({ filename, actions }) => (
  <div className={css.header}>
    <div className={css.title}>{path.basename(filename)}</div>
    <div className={css.actions}>
    {actions.map(action => (
      <button key={action.icon} onClick={action.method}>
        <img src={action.icon} />
        {action.text && <div>{action.text}</div>}
      </button>
    ))}
    </div>
  </div>
);

Header.propTypes = {
  filename: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.func,
      icon: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Header;
