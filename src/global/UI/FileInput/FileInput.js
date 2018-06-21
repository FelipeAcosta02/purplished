import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'global/UI'
import styles from './FileInput.module.scss'; 

export default class FileInput extends React.Component {
    state = {
        labelText: 'Choose images to upload',
        file: null,
        visible: false
    }
    checkFile = (event) => {
        event.preventDefault()
        const file = this.input.files[0]
        this.setState({file: file})
        this.setState({labelText: file.name})

    }
    mouseEnterHandler = () => {
        console.log('hovered')
        this.setState({visible: true})
    }
    mouseExitHandler = () => {
        console.log(':(')
        this.setState({visible: false})
    }
    render() {
        let {is, ...rest} = this.props

        let form = this.state.visible ? ( <form>
                
            <div> 
                <label
                    className={styles.Label} 
                    for="fileInput">
                    {this.state.labelText}
                </label>
                <input 
                    className={styles.FileInput}
                    type="file" 
                    ref={input => {this.input = input}}
                    id="fileInput" 
                    name="ifileInput"
                    accept="image/*" 
                    onChange={(e)=>this.checkFile(e)}
                    {...rest}/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>) : null
        return(
            <div>
                <Button is="Primary" onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseExitHandler} >
                    <Icon is="paperclip" from="Feathericons"/>
                </Button>
               {form}
            </div>
        )
    }
}

FileInput.propTypes={
    is: PropTypes.oneOf(['Primary', 'Default', 'Disabled']),
}

FileInput.defaultProps={
    is: "Default"
}