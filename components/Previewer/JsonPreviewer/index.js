import React from 'react';
import PropTypes from 'prop-types';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

import Previewer from '../index';

import css from '../style.css';

const JavascriptPreviewer = ({ value }) =>
  <div
    className={css.content}
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(value, {language: 'json'}).value
    }}
  />

JavascriptPreviewer.propTypes = {
  value: PropTypes.string,
};

export default Previewer(JavascriptPreviewer);
