import React from 'react';
import ConceptCard from 'components/ConceptCard/ConceptCard'
import {TopBar} from 'global/UI'

class CreateTestView extends React.Component {
   render() {
        return(
            <div>
                <TopBar>(Some tools)</TopBar>
                <ConceptCard />
            </div>
        )
    }
}

export default CreateTestView

