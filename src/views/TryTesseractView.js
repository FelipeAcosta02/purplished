import React from 'react';
// import Tesseract from 'tesseract.js'
import {FileInput} from 'global/UI';

class TryTesseract extends React.Component {
    state = {
        file: null,
        progress: 0,
        text: ''
    }
    checkFile = (event) => {
        event.preventDefault()
        const file = this.fileInput.files[0]
        this.setState({file: file})
        console.log(file)
    }
    render() {
        return(
            <div>
                <h1>Tesseract.js tests</h1>
                <h3>This page is only for beta testing purposes.</h3>
                <h3>Select a file to apply OCR.</h3>
                <form onSubmit={(e) => this.checkFile(e)} >
                        <input 
                            type="file" 
                            accept="image/*"
                            ref={input => {
                                this.fileInput = input;
                            }}/>
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.progress}</p>
                <p>{this.state.text}</p>
                <FileInput />
            </div>
        )
    }
}

export default  TryTesseract;