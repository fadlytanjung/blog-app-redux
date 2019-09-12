import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DeleteData, GetOneData,HandleUrl} from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

class home extends Component {
    
    delete(id){
        console.log(id)
        this.props.DeleteData(id);
    }
    goTo(id){
        this.props.GetOneData(id)
    }
    changePage(url) {
        this.props.HandleUrl(url)
    }
    render() {
        return (
            <Container>
                <h2 className="text-center " style={{ margin: 20 }}>All Posts</h2>
                <Row >
                    {
                    this.props.posts && this.props.posts.length>0 ? 
                    this.props.posts.map((item)=>{
                    return <Col key={item.id} 
                            md={4} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        
                        <Card style={{ height: "200px" }} className="text-center posts-content">
                            <Card.Body>
                                    <Link to={"/posts/" + item.id} 
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text className="text-center author-static">
                                        {item.author}
                                    </Card.Text>
                                    </Link>
                                    <div className="btn-action-custom">
                                    <Link to={"/post/edit/" + item.id}>
                                    <Button variant="warning"
                                        style={{marginRight:5}}
                                        onClick={() => this.goTo(item.id)}
                                        >
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                    </Link>
                                    <Button variant="danger"
                                        onClick={()=>this.delete(item.id)}
                                        >
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                    </div>
                            </Card.Body>
                        </Card>

                    </Col>

                        }) : 
                    <Col className="text-center">
                        <p>Data Empty</p>
                        <Link to="/post/new">
                        <Button variant="primary"
                            onClick={() => this.changePage('/post/new')}
                            >
                            <i className="fa fa-plus"></i> Add New Post
                        </Button>
                        </Link>
                    </Col>}
                </Row>
            </Container>
        )
    }
}

home.propTypes = {
    posts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    posts: state.blog.posts
})

export default connect(mapStateToProps, {DeleteData,GetOneData,HandleUrl})(home);