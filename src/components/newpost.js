import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,Form, Button } from 'react-bootstrap';
import {AddData,HandleUrl} from '../actions'


class newpost extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            body:''
        }
        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    async submit(e){
        await e.preventDefault();
        await this.props.AddData(this.state)
        alert('data baru berhasil ditambah');
        await this.props.HandleUrl('/');
        await this.props.history.push('/');

    }
    // static getDerivedStateFromProps(props, state) {
       
    //     return null
    // }
    render() {

        return (
            <Container>
                <h2 className="text-center " style={{ margin: 20 }}>New Post</h2>
                <Form onSubmit={(e)=>this.submit(e)}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"  
                            name='title'
                            onChange={(e)=>this.onChange(e)}
                        />
                    </Form.Group>
                   
                    <Form.Group controlId="Body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" rows="3" 
                            name='body'
                            onChange={(e) => this.onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" 
                            name='author'
                            onChange={(e) => this.onChange(e)}
                        />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    post: state.blog.post,
    posts:state.blog.posts
})

export default connect(mapStateToProps, {AddData,HandleUrl})(newpost);