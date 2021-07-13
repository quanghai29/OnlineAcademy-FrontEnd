import React from 'react';
import { Select } from 'react-materialize';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const CommonDescription = () => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  // }
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="course-title" type="text" className="validate" />
            <label for="course-title">Tiêu đề khóa học</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="brief-desc" type="text" className="validate" />
            <label for="brief-desc">Mô tả ngắn gọn</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={() => onEditorStateChange}
            />
            <textarea value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}></textarea> */}
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Textarea</label>
          </div>
        </div>
        <div className="row">
          <Select
            id="Select-9"
            label="Danh mục"
            multiple={false}
            options={{
              classes: 'col s12',
              dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250,
              },
            }}
            value="1"
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="price" type="text" className="validate" />
            <label for="price">Giá</label>
          </div>
          <div className="input-field col s6">
            <input id="discount" type="text" className="validate" />
            <label for="discount">Khuyến mãi</label>
          </div>
        </div>
        <button class="btn waves-effect" type="submit">
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default CommonDescription;
