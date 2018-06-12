import React from 'react';
import PropTypes from 'prop-types';
import styles from './UploadFile.module.scss'; 

export default class UploadFile extends React.Component {
    render() {
        let {is, ...rest} = this.props
        return(
            <label className={styles.Label+' '+styles[is]}> 
                Choose a file (this needs to be finished ASAP!)
                <input 
                    className={styles.InputFile} 
                    type="file" 
                    accept=".pdf, .jpg, .png" 
                    {...rest}/>
            </label>
        )
    }
}

UploadFile.propTypes={
    is: PropTypes.oneOf(['Primary', 'Default', 'Disabled']),
}

UploadFile.defaultProps={
    is: "Default"
}