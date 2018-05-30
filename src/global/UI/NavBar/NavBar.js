import React from 'react';
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'
import { Link } from "react-router-dom";
import {convertToKebabCase} from 'global/utilities'

 export default class NavBar extends React.Component {
     render(){
         let {is, links, ...rest} = this.props;
         let items = links ? links.map((link, i)=>(<div className={styles.ItemDiv} key={i}><Link to={convertToKebabCase(link)}><li>{link}</li></Link></div>)) : null
         return(
            <div className={styles.NavBar+' '+styles[is]} {...rest}>
                {items}
            </div>
         )
     }
 }
NavBar.propTypes={
    is: PropTypes.oneOf(['Primary', 'Secondary']),
    links: PropTypes.arrayOf(PropTypes.string)
}
NavBar.defaultProps={
    is: 'Secondary',
    links: null
}