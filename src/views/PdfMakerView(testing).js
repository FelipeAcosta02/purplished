import React from 'react';
import PDFMaker from 'components/PDFMaker/PDFMaker'
import {  } from 'antd'


class PDFMakerView extends React.Component {
    render() {
        return(
            <div>
                <h1>PDF maker</h1>
                <PDFMaker />
            </div>
        )
    }
}

export default PDFMakerView