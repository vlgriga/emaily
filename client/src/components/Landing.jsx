import React from 'react';
import {connect} from "react-redux";

class Landing extends React.Component {

    render() {
        return(
            "landing"
        )
    }
}

function mapStateToProps({ auth }) {
    return {auth};
}

export default connect(mapStateToProps)(Landing);