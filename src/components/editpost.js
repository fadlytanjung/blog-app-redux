import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { UpdateData,HandleUrl} from '../actions'


class editpost extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {

        this.setState(this.props.post)
    }
    async submit(e) {
        await e.preventDefault();
        await this.props.UpdateData(this.state)
      
        alert('data baru berhasil di update');
        await this.props.HandleUrl('/');
        await this.props.history.push('/');

    }

    render() {

        return (
            <Container>
                <h2 className="text-center " style={{ margin: 20 }}>New Post</h2>
                <Form onSubmit={(e) => this.submit(e)}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                            name='title'
                            value={this.state.id || ''}
                            onChange={(e) => this.onChange(e)}
                            hidden
                        />
                        <Form.Control type="text"
                            name='title'
                            value={this.state.title || ''}
                            onChange={(e) => this.onChange(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="Body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" rows="3"
                            name='body'
                            value={this.state.body || ''}
                            onChange={(e) => this.onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text"
                            name='author'
                            value={this.state.author || ''}
                            onChange={(e) => this.onChange(e)}
                        />
                    </Form.Group>
                    <Button type="submit" variant="warning">
                        Update
                    </Button>
                </Form>
            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    post: state.blog.post
})

export default connect(mapStateToProps, {UpdateData,HandleUrl})(editpost);