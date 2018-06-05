import React from 'react'; 
import styles from './Spinner.module.scss'
import {Backdrop} from 'global/UI'

const spinner = () => (
        <Backdrop show /* Make this dynamic later!!! */ >
            <div className={styles.Spinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Backdrop>

);

export default spinner;