import React from 'react';
import Form from '../Form/Form';
import { Carousel } from 'antd';
import styles from './SignInCarousel.module.scss'

class SignInCarousel extends React.Component {
    render() {
        return(
            <div className={styles.Div}>
                <Carousel autoplay className={styles.Carousel}>
                    <div>
                        <Form type="signIn"/>
                    </div>
                    <div>
                        <h1>lol</h1>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default SignInCarousel