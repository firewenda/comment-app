import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class richEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            htmlContent: ''
        }
    }

    handleChange = (content) => {
        console.log(content)
        this.setState({
            htmlContent: content
        })
    }

    handleRawChange = (rawContent) => {
        console.log(rawContent)
    }

    handleSave = (content) => {
        console.log(content)
    }

    render() {
        const uploadFn = (param) => {

            const serverURL = 'http://upload-server'
            const xhr = new XMLHttpRequest()
            const fd = new FormData()

            // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
            console.log(param.libraryId)

            const successFn = (response) => {
                // 假设服务端直接返回文件上传后的地址
                // 上传成功后调用param.success并传入上传后的文件地址
                param.success({
                    url: xhr.responseText
                })
            }

            const progressFn = (event) => {
                // 上传进度发生变化时调用param.progress
                param.progress(event.loaded / event.total * 100)
            }

            const errorFn = (response) => {
                // 上传发生错误时调用param.error
                param.error({
                    msg: 'unable to upload.'
                })
            }

            xhr.upload.addEventListener("progress", progressFn, false)
            xhr.addEventListener("load", successFn, false)
            xhr.addEventListener("error", errorFn, false)
            xhr.addEventListener("abort", errorFn, false)

            fd.append('file', param.file)
            xhr.open('POST', serverURL, true)
            xhr.send(fd)

        }

        const editorProps = {
            placeholder: 'Hello World!',
            contentFormat: 'html',
            initialContent: '',
            media: {
                image: true, // 开启图片插入功能
                video: false, // 开启视频插入功能
                audio: false, // 开启音频插入功能
                uploadFn: uploadFn, // 指定上传函数，说明见下文
            },
            controls: [
                'undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing',
                'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through',
                'superscript', 'subscript', 'emoji', 'text-align', 'split', 'headings', 'list_ul',
                'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media'
            ],
            onChange: this.handleChange,
            onRawChange: this.handleRawChange,
            onSave: this.handleSave,
            // 增加自定义预览按钮
            extendControls: [
                {
                    type: 'split',
                },
                {
                    type: 'button',
                    text: '预览',
                    className: 'preview-button',
                    onClick: () => {
                        window.open().document.write(this.state.htmlContent)
                    }
                }
            ],
        }

        return (
            <div className="editor-wrap">
                <BraftEditor {...editorProps} />
            </div>
        )

    }

    handleHTMLChange = (htmlContent) => {
        this.setState({ htmlContent })
    }

}