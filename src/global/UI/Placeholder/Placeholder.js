import React from 'react'
import styles from './Placeholder.module.scss'
import { deer } from 'global/assets'
import {returnRandomArrayElement} from 'global/utilities'

class Placeholder extends React.Component {
    state = {
        messages: ["nothing to see here", "nothing here, my deer", "deer seems lonely", "give deer a friend", "deer's looking lost", "deer's still looking", "deer wants company"]
    }
    render(){

        let placeholderText = null
        if(this.props.placeholder){
            placeholderText = <span>{this.props.placeholder}</span>
        }else{
            placeholderText = <span>{returnRandomArrayElement(this.state.messages)}</span>
        }
        return(
            <div className={styles.div}>
                <img src={deer} alt="Deer Image"/>
                {placeholderText}
            </div>
        )
    }

}

export default Placeholder