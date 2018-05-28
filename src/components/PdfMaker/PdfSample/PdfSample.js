import React from 'react';
import { Page, Text, View, Document, StyleSheet, /*Link, Font*/ } from '@react-pdf/core';

// Create styles
const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },
  heading: {
    flexGrow: 3,
    margin: 10,
    fontSize: 18,
    fontFamily: 'Oswald',
  },
  content: {
    flexGrow: 1,
  }
});

// Create PDF Component
class PDFSample extends React.Component {
  render() {
    let content = []
    let contentNum = this.props.contentNum

    for (let i = 1; i <= contentNum; i++) {
      content.push(<View>
                      <Text style={styles.content}>
                        {this.props.content}
                      </Text>
                      <br/>
                    </View>)
    }
    return(
      <Document>
        <Page size="A4" wrap >
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <br/>
          </View>
          <View>
            <Text style={styles.heading}>{this.props.heading}</Text>
            <br/>
          </View>
          {content}
        </Page>
  </Document>
  
    )
  }
}

export default PDFSample;