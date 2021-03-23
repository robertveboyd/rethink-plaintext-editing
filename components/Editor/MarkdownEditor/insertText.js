const makeInsertText = (text, setText, textareaRef) => ({
  atStartOfLine: startText => {
    const cursorStart = textareaRef.current.selectionStart

    // returns cursor start and end location for each line in textarea
    const lineCursors = textareaRef.current.value.split(/\r?\n/).reduce((acc, val) => {
      if (acc.length === 0) return [{ start: 0, end: val.length }];
      const start = acc.slice(-1)[0].end + 1;
      const end = start + val.length;
      return [...acc, { start, end }];
    }, []);
    
    let cursorLineBeginning = 0;
    for(let i = 0; i < lineCursors.length; ++i){
      const startEndCursors = lineCursors[i];
      if (cursorStart <= startEndCursors.end){
        cursorLineBeginning = startEndCursors.start;
        break;
      }
    }

    textareaRef.current.selectionStart = cursorLineBeginning;
    textareaRef.current.selectionEnd = cursorLineBeginning;

    const updatedText = text.slice(0, cursorLineBeginning) + startText + text.slice(cursorLineBeginning);
    setText(updatedText);

    textareaRef.current.value = updatedText;

    textareaRef.current.selectionStart = cursorLineBeginning;
    textareaRef.current.selectionEnd = cursorLineBeginning;

    textareaRef.current.focus();
  },

  aroundSelection: (leftText, rightText) => {
    const cursorStart = textareaRef.current.selectionStart;
    const cursorEnd = textareaRef.current.selectionEnd;

    const updatedText =
      text.slice(0, cursorStart) +
      leftText +
      text.slice(cursorStart, cursorEnd) +
      rightText +
      text.slice(cursorEnd);

    setText(updatedText);
    textareaRef.current.value = updatedText;

    textareaRef.current.selectionStart = cursorStart + leftText.length;
    textareaRef.current.selectionEnd = cursorEnd + leftText.length;
    
    textareaRef.current.focus();
  },
})

export default makeInsertText;