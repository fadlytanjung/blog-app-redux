import React,{Component} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import {HandleUrl} from '../actions'
import {Link} from 'react-router-dom';

class navbar extends Component{

    changePage(url){
        this.props.HandleUrl(url)
    }
    render(){
       
        return(
            <Navbar collapseOnSelect expand="lg" 
                className="custom-nav"
            >
                <Container 
                // style={{ maxWidth: 1024 }}>
                >
                    <Navbar.Brand href="/">Blog.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav className="nav-link">
                                <Link to="/"
                                    onClick={() => this.changePage('/')}
                                    className={this.props.url === '/' ?"menu active":"menu"}>Posts
                                </Link>
                            </Nav>
                            <Nav className="nav-link">
                                <Link to="/post/new"
                                    onClick={() => this.changePage('/post/new')}
                                    className={this.props.url === '/post/new' ? "menu active" : "menu"}>New Post
                                </Link>
                            </Nav>
                            <Nav className="nav-link">
                                <Link to="/passgenerator"
                                    onClick={() => this.changePage('/passgenerator')}
                                    className={this.props.url === '/passgenerator' ? "menu active" : "menu"}
                                    >Password Generator
                                </Link>
                            </Nav>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    posts:state.blog.posts,
    post: state.blog.post,
    url:state.blog.url
})

export default connect(mapStateToProps, {HandleUrl})(navbar);