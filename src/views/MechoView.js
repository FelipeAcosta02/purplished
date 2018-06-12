import React from 'react';
import {Aux} from 'global/hoc'

class Mecho extends React.Component {
    render() {
        let m = <Aux>&Mu;</Aux>
        let e = <Aux>&Xi;</Aux>
        let c = <Aux>&sigmaf;</Aux>
        let h = <Aux>&pi;</Aux>
        let o = <Aux>&Omega;</Aux>

        return(
            <div>
                <h1>
                    Welcome to {m}{e}{c}{h}{o}
                </h1>
                <h4>
                    You seem to have found a secret page!!! <br/>
                    If you want to continue, you must prove yourself worthy.
                </h4>
            </div>
        )
    }
}

export default Mecho