import React, { Component } from 'react';
import { Form, Input, Button, Progress } from 'semantic-ui-react'
import {post} from 'axios'

class UploadForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            total: 100,
            uploaded: 0,
            status: 'no-upload' // no-upload, uploading, uploaded
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault() // Stop form submit
        console.log("Upload Begin")
        this.fileUpload(this.state.file).then((response) => {
            this.setState({status: 'uploaded'})
            console.log(response);
        })
    }

    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }

    fileUpload = (file) => {
        const url = 'https://mytune-service.herokuapp.com/api/songs/upload';
        const formData = new FormData();
        formData.append('file',file)
        this.setState({
            total: file.size,
            status: 'uploading'
        })
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                this.setState({uploaded: progressEvent.loaded})
                console.log(this.state.uploaded / this.state.total)
            }
        }
        return post(url, formData, config)
    }

    render() {
        let uploadprogress
        if (this.state.status === 'no-upload'){
            uploadprogress = <div></div>            
        } else if (this.state.status === 'uploading') {
            uploadprogress = <Progress percent={Math.floor((this.state.uploaded/this.state.total)*100)} color='blue' active progress>Uploading...</Progress>
        } else if (this.state.status === 'uploaded') {
            uploadprogress = <Progress percent={100} success>Uploaded!</Progress>
        }

        return (
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <Input  fluid type="file" name="file" id="file" onChange={this.onChange} disabled={this.state.status === 'uploading' ? true : false}/>
                    {uploadprogress}
                    <Button fluid size="large" primary content="Upload Song" type="submit" disabled={this.state.status === 'uploading' ? true : false}/>
                </Form>
            </div>
        )
    }
}

export default UploadForm;