import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import Colors from "../../../assets/style/Colors";

const TextEditorWrap = styled.div`
    border: 1px solid ${Colors.grey};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    .App-header{
        text-align: left;
        margin-bottom: 5px;
        font-weight: 600;
    }
    .rdw-editor-main {
      max-height: 80px;
      overflow: auto;
      min-height: 80px
    }
    .preview{
        text-align: left;
        display:none;
    }
`;

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent]= useState<any> (null);
  const handleEditorChange = (state:any) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html:any) => {
    return {
      __html: DOMPurify.sanitize(html)
    };
  };
  return (
    <TextEditorWrap className="textEditorWrap">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </TextEditorWrap>
  );
};
export default TextEditor;
