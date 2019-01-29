import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from "../../actions";

class StreamShow extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        const {title, description} = this.props.stream;

        if(!this.props.stream){
            return <div>loading...</div>
        }
        return (
            <div className="content">
                <h3>{title}</h3>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProp = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProp, {fetchStream})(StreamShow);
