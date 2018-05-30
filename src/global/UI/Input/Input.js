import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default class Input extends React.Component {
    render(){
            let {addonBefore, addonAfter, is, ...rest } = this.props
            let input = null
            let AddonBefore = addonBefore ? (<span className={styles.addonBefore}>{addonBefore}</span>) : null
            let AddonAfter = addonAfter ? (<span className={styles.addonAfter}>{addonAfter}</span>) : null
            let InputStyles = [styles[is]+' '];
            if (addonBefore) { InputStyles.push(styles.BorderLeft+' ') }
            if (addonAfter) { InputStyles.push(styles.BorderRight+' ') }
            if(is==="Area"){
                input = (<textarea  {...rest} className={InputStyles}/>)
            }else{
                input = <input  {...rest} className={InputStyles}/>
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