import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import path from 'path';

import Header from '../Header';

import css from './style.css';

const Previewer = Previewer => ({ file, setIsEdit }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  const actions = [
    { method: () => setIsEdit(true), icon: 'icon-edit.svg', text: 'Edit' }
  ];

  return (
    <div className={css.preview}>
      <Header filename={file.name} actions={actions} />
      <Previewer value={value} />
    </div>
  );
};

Previewer.propTypes = {
  file: PropTypes.object,
  setIsEdit: PropTypes.func
};

export default Previewer;
