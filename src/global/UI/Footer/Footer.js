import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.scss'
import {convertToKebabCase} from 'global/utilities'
import { Link } from "react-router-dom";

class FooterElement extends React.Component{
    render(){
        let {main, subs, ...rest} = this.props
        let Subs = subs ? subs.map((page, i)=>(<li key={i}><Link key={i} to={convertToKebabCase(page)}>{page}</Link></li>)) : null
        return(
            <div className={styles.Element}>
                <p><Link to={convertToKebabCase(main)}>{main}</Link></p>
                <ul>{Subs}</ul>
            </div>
        )
    }
}

export default class Footer extends React.Component {
    render(){
        let {links, ...rest} = this.props
        let Elements = links ? links.map((pages, i)=>(<FooterElement main={pages['main']} subs={pages['subs']} key={i}/>)) : null
        return(
            <div className={styles.Footer} {...rest} >
                {Elements}
            </div>
        )
    }
}

Footer.propTypes={
    links: PropTypes.arrayOf(PropTypes.shape({main: PropTypes.string, subs: PropTypes.arrayOf(PropTypes.string)}))
}