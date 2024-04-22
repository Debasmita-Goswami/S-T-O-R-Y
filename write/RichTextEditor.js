import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState } from 'draft-js';
import style from "./richtexteditor.module.css";

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
});

const RichTextEditor = ({ onChange }) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(''))
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    if (onChange) {
      onChange(state);
    }
  };

  return (
    <div>
      <Editor editorState={editorState} onEditorStateChange={handleEditorChange}
      placeholder="Care to Share your Story...?" />
    </div>
  );
};

export default RichTextEditor;
