import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './style.css';

const Editor = Editor => ({ file, write, onSetActiveFile }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      setText(await file.text());
    })();
  }, [file]);

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const createFile = () =>
    new File([text], file.name, { type: file.type, lastModified: new Date() });

  const actions = [
    { method: () => onSetActiveFile(createFile()), icon: 'icon-preview.svg', text: 'Preview' },
    { method: () => write(createFile()), icon: 'icon-save.svg', text: 'Save' }
  ];

  return (
    <div className={css.editor}>
      <Editor
        filename={file.name}
        actions={actions}
        text={text}
        setText={setText}
        onTextChange={handleTextChange}
      />
    </div>
  );
};

Editor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func,
  onSetActiveFile: PropTypes.func
};

export default Editor;
