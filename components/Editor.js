import React from 'react'
import dynamic from 'next/dynamic'

// import EditorJs from 'react-editor-js'
// import Embed from '@editorjs/embed'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
// import SimpleImage from '@editorjs/simple-image'

const EditorJs = dynamic(
  () => import('react-editor-js'),
  { ssr: false }
)

const Embed = dynamic(
  () => import('@editorjs/embed'),
  { ssr: false }
)

const Code = dynamic(
  () => import('@editorjs/code'),
  { ssr: false }
)

const LinkTool = dynamic(
  () => import('@editorjs/link'),
  { ssr: false }
)

const SimpleImage = dynamic(
  () => import('@editorjs/simple-image'),
  { ssr: false }
)


class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false
    }
  }
  componentWillMount() {
    this.setState({
      isMounted: false
    })
  }
  componentDidMount() {
    this.setState({
      isMounted: true
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="attribution">
            <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
            <p className="attributionUsername">@barackobama</p>
          </div>
        </div>
        {
          this.state.isMounted &&
          <EditorJs className="editor" autofocus={true} tools={{ embed: { class: Embed, inlineToolbar: true }, code: { class: Code, inlineToolbar: true }, simpleImage: { class: SimpleImage, inlineToolbar: true }, linkTool: { class: LinkTool, inlineToolbar: true } }} />
        }
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
      </div>
    )
  }
}

export default Editor
