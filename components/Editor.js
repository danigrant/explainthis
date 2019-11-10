import React from 'react'
import dynamic from 'next/dynamic'
import { saveExplanationToDB } from './Firebase'

const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false }
)

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  async handleSave() {
    await saveExplanationToDB("emergence", "@barackobama", this.state.text)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="attribution">
            <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
            <p className="attributionUsername">@barackobama</p>
          </div>
          <div onClick={this.handleSave}>submit button</div>
        </div>
        <ReactQuill className="editor" modules={{toolbar: ['link', 'image', 'video']}} value={this.state.text} onChange={this.handleChange} />
        <style jsx>{`
          .wrapper {
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 550px;
            margin-top: 10px;
          }
          .header {
            background: #fafafa;
            padding: 3px 8px;
            min-height: 39px;
            border-radius: 5px 5px 0 0;
            border-bottom: 1px solid #ddd;
          }
          .attribution {
            position: relative;
            top: 5px;
            left: 5px;
          }
          .attributionAvatar {
            width: 50px;
            border-radius: 50px;
            display: inline-block;
          }
          .attributionUsername {
            display: inline-block;
            margin-left: 10px;
            position: relative;
            bottom: 15px;
          }
          .editor {
            padding: 5px 20px 5px 20px;
            border-radius: 0 0 5px 5px;
          }
        `}</style>
        <style jsx global>{`
          .ql-toolbar.ql-snow, .ql-container.ql-snow {
            border: none;
          }
          .ql-toolbar.ql-snow {
            border-bottom: 1px solid #ddd;
          }
        `}</style>
      </div>
    )
  }
}

export default Editor
