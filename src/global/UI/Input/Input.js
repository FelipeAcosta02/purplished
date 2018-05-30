import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default class Input extends React.Component {
    render(){
            let {addonBefore, addonAfter, is, ...rest } = this.props
            let input = null
            let AddonBefore = addonBefore ? (<span className={styles.addonBefore}>{addonBefore}</span>) : null
            let AddonAfter = addonAfter ? (<span className={styles.addonAfter}>{addonAfter}</span>) : null
            if(is==="Area"){
                input = (<textarea  {...rest} className={styles[is]}/>)
            }else{
                input = <input  {...rest} className={styles[is]}/>
            }
        return(
            <div className={styles.div}>
                {AddonBefore}
                {input}
                {AddonAfter}
            </div>
        )
    }
}
Input.propTypes={
    is: PropTypes.oneOf(['Area', 'Default', 'Large', 'Small']),
    addonAfter: PropTypes.element,
    addonBefore: PropTypes.element,
}