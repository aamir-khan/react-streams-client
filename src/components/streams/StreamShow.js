import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream} from "../../actions";


class StreamShow extends React.Component{

    constructor(props){
        super(props);
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.buildPlayer();
    }

    componentWillUnmount() {
        if(this.player){
            this.player.destroy();
        }
    }

    buildPlayer() {
        if(this.player || !this.props.stream) {
            return;
        }

        const {id} = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {

        if(!this.props.stream){
            return <div>loading...</div>
        }

        const {title, description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{width:'100%'}} controls/>
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
