import React from 'react'
import PropTypes from 'prop-types'
import {PEWhite, PEPurple} from 'global/assets'

export default class Logo extends React.Component {
    render(){
        let {is, ...rest} = this.props
        let logo = null
        if (is==='Primary'){logo=PEPurple}else{logo=PEWhite}
        return(
            <div {...rest}>
                <img 
                src={logo} 
                alt="Purplished Logo" 
                style={{margin: 'auto', height:'100%', verticalAlign:'baseline'}}/>
            </div>
        )
    }
}
Logo.propTypes={
    is: PropTypes.oneOf(['Primary', 'Default'])
}
Logo.defaultProps={
    is: 'Default'
}