import React from 'react';
import { Page, Text, View, Document, StyleSheet, /*Link, Font*/ } from '@react-pdf/core';
// import ReactPDF from '@react-pdf/node';


// Create PDF Component
const PDFSample = (props) => {
    return(
      <Document>
        <Page size="A4">
          <View>
            <Text>title</Text>
            <br/>
          </View>
          <View>

            <Text>heading</Text>
            <br/>
          </View>
        </Page>
      </Document>
  
    )

}

// ReactPDF.render(<PDFSample/>, `http://localhost:3000/pdf-maker/example.pdf`)


export default PDFSample;