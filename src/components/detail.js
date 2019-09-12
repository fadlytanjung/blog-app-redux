import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Container} from 'react-bootstrap';

import {GetOneData} from '../actions';

class detail extends Component {
    
    componentDidMount(){
        this.props.GetOneData(Number(this.props.match.params.id));
        
    }
    render() {
        
        return (
            <Container>
                {this.props && this.props.post ? 
                <><h2 className="text-center " style={{ margin: 20 }}>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <p>{this.props.post.author}</p></>
                :this.props.history.push('/')}
            </Container>
        )
    }
}

detail.propTypes = {
    post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    post: state.blog.post
})

export default connect(mapStateToProps, {GetOneData})(detail);