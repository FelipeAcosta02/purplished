import React from 'react';
// import Tesseract from 'tesseract.js'
import {Button} from 'global/UI';

var Tesseract = window.Tesseract;

class TryTesseract extends React.Component {
    state = {
        file: null,
        progress: 0,
        text: ''
    }
    checkFile = (event) => {
        event.preventDefault()
        const file = this.fileInput.files[0]
        console.log(file)
        this.useTesseract(file)

    }
    useTesseract = (image) => {
        Tesseract.recognize(image)
        .progress(message => {
                        console.log(message.progress)
                        this.setState({progress: message.progress})
                })
        .catch(err => console.error(err))
        .then(result => {
                        console.log(result)
                        this.setState({text: result.text})
                })
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
                            ref={input => {
                                this.fileInput = input;
                            }}/>
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.progress}</p>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default  TryTesseract;