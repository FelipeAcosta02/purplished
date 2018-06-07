import React from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.module.scss';

export default class Switch extends React.Component {
    render() {
        let {checked, ...rest} = this.props
        return(
            <div className={styles.onoffswitch}>
                <input 
                    type="checkbox" 
                    name="onoffswitch" 
                    className={styles.onoffswitchcheckbox} 
                    {...rest}
                    id="myonoffswitch" 
                    checked={checked}/>
                <label 
                    className={styles.onoffswitchlabel} 
                    for="myonoffswitch">
                </label>
            </div>
        )
    }
}

Switch.propTypes={
    checked: PropTypes.bool,
    onClick: PropTypes.func
}

Switch.defaultProps={
    checked: null,
    onClick: null
}