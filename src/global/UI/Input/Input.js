import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default class Input extends React.Component {
    render(){
            let {addonBefore, addonAfter, is, style, ...rest } = this.props
            let input = null
            let AddonBefore = addonBefore ? (<span className={styles.addonBefore}>{addonBefore}</span>) : null
            let AddonAfter = addonAfter ? (<span className={styles.addonAfter}>{addonAfter}</span>) : null
            let InputStyles = [];
            if (addonBefore) { InputStyles.push(styles.BorderLeft+' ') }
            if (addonAfter) { InputStyles.push(styles.BorderRight+' ') }
            if(is==="Area"){
                input = (<textarea  {...rest} className={InputStyles}/>)
            }else{
                input = <input  {...rest} className={InputStyles}/>
            }
        return(
            <div className={styles.div+' '+styles[is]} style={style}>
                {AddonBefore}
                {input}
                {AddonAfter}
            </div>
        )
    }
}
Input.propTypes={
    is: PropTypes.oneOf(['Area', 'Default', 'Large', 'Small', 'Ghost']),
    addonAfter: PropTypes.element,
    addonBefore: PropTypes.element,
}

Input.defaultProps={
    is: "Default"
}