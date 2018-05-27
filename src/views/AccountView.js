import React from 'react';
import { Button } from 'antd'
import { Link } from 'react-router-dom'


class AccountView extends React.Component {
    render() {
        return(
            <div>
                <h1>Account</h1>
                <Button type="dashed" >
                    <Link to="/pdf">
                        Test PDF creator
                    </Link>
                    
                </Button>
            </div>
        )
    }
}

export default AccountView;