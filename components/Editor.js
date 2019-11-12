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
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    // this.quillRef.getModule('toolbar').addHandler('image', imageHandler);
    // , handlers: { 'image': this.imageHandler }
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  async handleSave() {
    await saveExplanationToDB("emergence", "@barackobama", this.state.text)
    this.setState({
      text: ''
    })
  }

  async imageHandler(image) {
    console.log('in image handler');
    let res = await fetch('https://api.imgur.com/3/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}`
      },
      body: `image=${image}`
    })
    let json = await res.json()

    console.log(json);
  }

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="header">
          <div className="attribution">
            <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
            <p className="attributionUsername">@barackobama</p>
          </div>
        </div>
        <ReactQuill ref={(el) => this.quillRef = el} className="editor" modules={{ toolbar: ['link', 'image', 'video'] }} placeholder={this.props.placeholder} value={this.state.text} onChange={this.handleChange} />
        </div>
        <div className="buttonBar">
          <div onClick={this.handleSave} className="submit-button button">Submit</div>
          <div onClick={this.handleSave} className="submit-and-tweet-button button">This is my best work. Submit and tweet.</div>
        </div>
        <style jsx>{`
          .wrapper {
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 100%;
            max-width: 800px;
            margin-top: 30px;
            margin-bottom: 30px;
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
            display: inline-block;
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
          .button {
            display: inline-block;
            padding: 10px 30px 10px 30px;
            border-radius: 20px;
            margin: 0;
            color: white;
          }
          .submit-button {
            background: #A3D066;
            margin-right: 25px;
          }
          .submit-and-tweet-button {
            background: #6EC3E9;
          }
          .button:hover {
            transform: scale(1.1);
            transform-origin: center;
            filter: brightness(115%);
            cursor: pointer;
          }
          .button:active {
            filter: brightness(120%);
          }
        `}</style>
        <style jsx global>{`
          .ql-toolbar.ql-snow, .ql-container.ql-snow {
            border: none;
          }
          .ql-toolbar.ql-snow {
            border-bottom: 1px solid #ddd;
          }
          .ql-editor {
            font-family: Nunito;
          }
        `}</style>
      </div>
    )
  }
}

export default Editor
