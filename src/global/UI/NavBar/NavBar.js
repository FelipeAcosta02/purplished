import React from 'react';
import Item from "./Item/Item";
import styles from './NavBar.module.scss'

const navBar = () => (
    <div className={styles.NavBar}>
                <Item>
                    Home
                </Item>
                <Item>
                    Classes
                </Item>
                <Item>
                    Groups
                </Item>
                <Item>
                    Tests
                </Item>
                <Item>
                    :)
                </Item>
                <Item>
                    Sign in
                </Item>
    </div>
    
)

export default navBar