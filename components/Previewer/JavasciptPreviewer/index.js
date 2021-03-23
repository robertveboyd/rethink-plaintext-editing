import React from 'react';
import PropTypes from 'prop-types';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import Previewer from '../index';

import css from '../style.css';

const JavascriptPreviewer = ({ value }) =>
  <div
    className={css.content}
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(value, {language: 'javascript'}).value
    }}
  />

JavascriptPreviewer.propTypes = {
  value: PropTypes.string,
};

export default Previewer(JavascriptPreviewer);
