import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import Previewer from '../index';

import css from '../style.css';

const MarkdownTextPreviewer = ({ value }) => (
  <div
    className={css.content}
    dangerouslySetInnerHTML={{
      __html: marked(value)
    }}
  />
);

MarkdownTextPreviewer.propTypes = {
  value: PropTypes.string
};

export default Previewer(MarkdownTextPreviewer);
