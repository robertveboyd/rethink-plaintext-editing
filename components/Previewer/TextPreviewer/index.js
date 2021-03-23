import React from 'react';
import PropTypes from 'prop-types';

import Previewer from '../index';

import css from '../style.css';

const TextPreviewer = ({ value }) =>
  <div className={css.content}>{value}</div>

TextPreviewer.propTypes = {
  value: PropTypes.string,
};

export default Previewer(TextPreviewer);
