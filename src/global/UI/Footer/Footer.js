import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.scss'
import {stringToKebab} from 'global/utilities'
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";


class FooterElement extends React.Component{
    render(){
        let {main, subs, ...rest} = this.props
        let Subs = subs ? subs.map((page, i)=>(<Link key={i} to={stringToKebab(page)}>{page}</Link>)) : null
        return(
                <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{margin: 'auto'}}>
                    <p><Link to={stringToKebab(main)} {...rest} >{main}</Link></p>
                    {Subs}
                </Col>
        )
    }
}

export default class Footer extends React.Component {
    render(){
        let {links, ...rest} = this.props
        let Elements = links ? links.map((pages, i)=>(<FooterElement main={pages['main']} subs={pages['subs']} key={i}/>)) : null
        return(
            <div className={styles.Footer} {...rest} >
                <Row align="center" >
                    {Elements}
                </Row>
            </div>
        )
    }
}

Footer.propTypes={
    links: PropTypes.arrayOf(PropTypes.shape({main: PropTypes.string, subs: PropTypes.arrayOf(PropTypes.string)}))
}

