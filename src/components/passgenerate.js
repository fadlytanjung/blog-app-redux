import React, { Component } from 'react';

import { Container, Card, Form, Col, InputGroup, Button} from 'react-bootstrap';

import generator from 'generate-password';
class passgenerate extends Component {

    state = {
        pass:'',
        inline_button:false,
        disable_input:false
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    generate(){
        var password = generator.generate({
            length: 12,
            numbers: true,
            excludeSimilarCharacters:true,
            symbols:true
        });
        if(this.state.disable_input){
            this.setState({ inline_button: false, pass: '', disable_input: false })
        }else{
            this.setState({inline_button:true,pass:password,disable_input:true})
        }
    }
    render() {
        return (
            <Container>
                <h2 className="text-center " style={{ margin: 20 }}>Password Generator</h2>
                <Card>
                    <Card.Body>
                    <Form onSubmit={(e)=>{e.preventDefault()}}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        name="pass"
                                        value={this.state.pass}
                                        onChange={(e)=>this.onChange(e)}
                                        placeholder="Enter Password"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        disabled={this.state.disable_input}
                                    />
                                    <InputGroup.Prepend>
                                        <Button onClick={()=>this.generate()}
                                            variant={this.state.inline_button ? 'outline-primary':'primary'}
                                            >
                                            
                                            Generate Password
                                        </Button>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                    </Card.Body>
                </Card>
            </Container>
        )
    }
}



export default passgenerate