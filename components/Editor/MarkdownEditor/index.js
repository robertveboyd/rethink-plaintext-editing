import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';

import Editor from '../';

import makeInsertText from './insertText';

const MarkdownEditor = ({ filename, actions, text, setText, onTextChange }) => {
  const textareaRef = useRef();

  const insertText = makeInsertText(text, setText, textareaRef);
  
  const markdownActions = [
    { method: () => insertText.atStartOfLine('# '), icon: 'icon-header.svg' },
    { method: () => insertText.aroundSelection('**', '**'), icon: 'icon-bold.svg' },
    { method: () => insertText.aroundSelection('*', '*'), icon: 'icon-italics.svg' },
    { method: () => insertText.aroundSelection('~~', '~~'), icon: 'icon-strikethrough.svg' },
    { method: () => insertText.aroundSelection('[', '](url)'), icon: 'icon-link.svg' },
    { method: () => insertText.atStartOfLine('> '), icon: 'icon-quote.svg' },
    { method: () => insertText.aroundSelection('`', '`'), icon: 'icon-code.svg' },
    { method: () => insertText.aroundSelection('![](', ')'), icon: 'icon-image.svg' },
    { method: () => insertText.atStartOfLine('- '), icon: 'icon-list.svg' }
  ];
  return (
    <>
      <Header filename={filename} actions={[...markdownActions, ...actions]} />
      <textarea ref={textareaRef} value={text} onChange={onTextChange} />
    </>
  );
};

MarkdownEditor.propTypes = {
  filename: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.func,
      icon: PropTypes.string,
      text: PropTypes.string
    })
  ),
  text: PropTypes.string,
  setText: PropTypes.func,
  onTextChange: PropTypes.func
};

export default Editor(MarkdownEditor);
