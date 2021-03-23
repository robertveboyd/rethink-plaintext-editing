import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import path from 'path';
import classNames from 'classnames';

import { listFiles } from '../files';

import TextPreviewer from '../components/Previewer/TextPreviewer';
import MarkdownPreviewer from '../components/Previewer/MarkdownPreviewer';
import JavascriptPreviewer from '../components/Previewer/JavasciptPreviewer';
import JsonPreviewer from '../components/Previewer/JsonPreviewer';

import TextEditor from '../components/Editor/TextEditor';
import MarkdownEditor from '../components/Editor/MarkdownEditor';

import IconPlaintextSVG from '../public/icon-plaintext.svg';
import IconMarkdownSVG from '../public/icon-markdown.svg';
import IconJavaScriptSVG from '../public/icon-javascript.svg';
import IconJSONSVG from '../public/icon-json.svg';

import css from './style.module.css';

const TYPE_TO_ICON = {
  'text/plain': IconPlaintextSVG,
  'text/markdown': IconMarkdownSVG,
  'text/javascript': IconJavaScriptSVG,
  'application/json': IconJSONSVG
};

const FilesTable = ({ files, activeFile, onSetActiveFile }) => {
  return (
    <div className={css.files}>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr
              key={file.name}
              className={classNames(
                css.row,
                activeFile && activeFile.name === file.name ? css.active : ''
              )}
              onClick={() => onSetActiveFile(file)}
            >
              <td className={css.file}>
                <div
                  className={css.icon}
                  dangerouslySetInnerHTML={{
                    __html: TYPE_TO_ICON[file.type]
                  }}
                ></div>
                {path.basename(file.name)}
              </td>

              <td>
                {new Date(file.lastModified).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

FilesTable.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  activeFile: PropTypes.object,
  setActiveFile: PropTypes.func
};

const REGISTERED_EDITORS = {
  'text/plain': TextEditor,
  'text/markdown': MarkdownEditor,
  'text/javascript': TextEditor,
  'application/json': TextEditor
}

const REGISTERED_PREVIEWERS = {
  'text/plain': TextPreviewer,
  'text/markdown': MarkdownPreviewer,
  'text/javascript': JavascriptPreviewer,
  'application/json': JsonPreviewer
};

const PlaintextFilesChallenge = () => {
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const files = listFiles();
    setFiles(files);
  }, []);

  const write = file => {
    setFiles(files.map(f => (file.name === f.name ? file : f)));
    setActiveFile(file)
  }

  const handleSetActiveFile = activeFile => {
    setActiveFile(activeFile);
    setIsEdit(false);
  };

  const Previewer = activeFile ? REGISTERED_PREVIEWERS[activeFile.type] : null;
  const Editor = activeFile ? REGISTERED_EDITORS[activeFile.type] : null;

  return (
    <div className={css.page}>
      <Head>
        <title>Rethink Engineering Challenge</title>
        <link
          rel="stylesheet"
          href="highlight.css"
        />
      </Head>
      <aside>
        <header>
          <div className={css.tagline}>Rethink Engineering Challenge</div>
          <h1>Fun With Plaintext</h1>
          <div className={css.description}>
            Let{"'"}s explore files in JavaScript. What could be more fun than
            rendering and editing plaintext? Not much, as it turns out.
          </div>
        </header>

        <FilesTable
          files={files}
          activeFile={activeFile}
          onSetActiveFile={handleSetActiveFile}
        />

        <div style={{ flex: 1 }}></div>

        <footer>
          <div className={css.link}>
            <a href="https://v3.rethink.software/jobs">Rethink Software</a>
            &nbsp;—&nbsp;Frontend Engineering Challenge
          </div>
          <div className={css.link}>
            Questions? Feedback? Email us at jobs@rethink.software
          </div>
        </footer>
      </aside>

      <main className={css.editorWindow}>
        {activeFile && (
          <>
            {isEdit && (
              <Editor file={activeFile} write={write} setIsEdit={setIsEdit} onSetActiveFile={handleSetActiveFile}/>
            )}
            {!isEdit && <Previewer file={activeFile} setIsEdit={setIsEdit} />}
          </>
        )}

        {!activeFile && (
          <div className={css.empty}>Select a file to view or edit</div>
        )}
      </main>
    </div>
  );
};

export default PlaintextFilesChallenge;
