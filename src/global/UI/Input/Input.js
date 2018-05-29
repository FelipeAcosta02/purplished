import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default class Input extends React.Component {
    render(){
            let addonBefore = null;
            let addonAfter = null
            let input = null
            if(this.props.addonBefore){
                addonBefore = (<span className={styles.addonBefore}>
                                    {this.props.addonBefore}
                                </span>)
            }
            if(this.props.addonAfter){
                addonAfter =    (<span className={styles.addonAfter}>
                                    {this.props.addonAfter}
                                </span>)
            }
            if(this.props.is==="Area"){
                input = (<textarea  {...this.props} className={styles[this.props.is]} placeholder={this.props.placeholder}/>)
            }else{
                input = <input  {...this.props} className={styles[this.props.is]}  onChange={this.props.onChange} placeholder={this.props.placeholder}/>
            }
        return(
            <div className={styles.div}>
                {addonBefore}
                {input}
                {addonAfter}
            </div>
        )
    }
}
Input.propTypes={
    is: PropTypes.oneOf(['Area', 'Default', 'Large', 'Small']),
    placeholder: PropTypes.string,
    addonAfter: PropTypes.element,
    addonBefore: PropTypes.element,
    onChange: PropTypes.func
}