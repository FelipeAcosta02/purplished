import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Placeholder.module.scss'
import { deer } from 'global/assets'
import {returnRandomArrayElement} from 'global/utilities'

/**
* @augments {Component<{says:arrayOfstring)>}
*/
export default class Placeholder extends Component {
    render(){
        return(
            <div className={styles.div}>
                <img src={deer} alt="Deer Sketch"/>
                <span>{returnRandomArrayElement(this.props.says)}</span>
            </div>
        )
    }
};
Placeholder.defaultProps = {
    says: ["nothing to see here", "nothing here, my deer", "deer seems lonely", "give deer a friend", "deer's looking lost", "deer's still looking", "deer wants company"]
}
Placeholder.propTypes = {
    says: PropTypes.arrayOf(PropTypes.string)
};