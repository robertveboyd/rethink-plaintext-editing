import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';

import Editor from '../';

const TextEditor = ({ filename, actions, text, onTextChange }) => (
  <>
    <Header filename={filename} actions={actions} />
    <textarea value={text} onChange={onTextChange} />
  </>
);

TextEditor.propTypes = {
  filename: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.func,
      icon: PropTypes.string,
      text: PropTypes.string
    })
  ),
  text: PropTypes.string,
  onTextChange: PropTypes.func
};

export default Editor(TextEditor);
