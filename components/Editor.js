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
    this.props.handleSubmitAnswer()
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
      <div className="wrapper">
        <div className="header">
          <div className="attribution">
            <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
            <p className="attributionUsername">@barackobama</p>
          </div>
          <div className="submit-button" onClick={this.handleSave}>submit!</div>
        </div>
        <ReactQuill ref={(el) => this.quillRef = el} className="editor" modules={{ toolbar: ['link', 'image', 'video'] }} value={this.state.text} onChange={this.handleChange} />
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
          .submit-button {
            display:inline-block;
            padding:0.7em 1.4em;
            margin:0 0.3em 0.3em 0;
            border-radius:0.15em;
            box-sizing: border-box;
            text-decoration:none;
            font-family:'Roboto',sans-serif;
            text-transform:uppercase;
            font-weight:400;
            color:#FFFFFF;
            background-color:#3369ff;
            box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
            text-align:center;
            position:relative;
            float: right;
            top: 15px;
          }
          .submit-button:active {
            filter: brightness(90%);
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
