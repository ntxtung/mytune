import React, { Component } from 'react';
import {Container, Form, Input, Icon, Button} from 'semantic-ui-react'

class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            pwd: ''
        }
    }
    doSignUp = () => {
        console.log('hello sign up')
    }

    render(){
        return(
            <div>
                <Container>
                    <Form method="post">
                        <div className="ui stacked secondary segment">
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon name="user"/>
                                    <input type="text" name="fname" placeholder="First Name"/>
                                </Input>
                            </Form.Field>
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon name="user"/>
                                    <input type="text" name="lname" placeholder="Last Name"/>
                                </Input>
                            </Form.Field>
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon name="mail"/>
                                    <input type="text" name="email" placeholder="E-mail address"/>
                                </Input>
                            </Form.Field>
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon className="lock icon"/>
                                    <input type="password" name="pwd" placeholder="Password"/>
                                </Input>
                            </Form.Field>
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon className="lock icon"/>
                                    <input type="password" name="repwd" placeholder="Confirm Password"/>
                                </Input>
                            </Form.Field>
                            <Button fluid size="large" color="orange" content="Submit" onClick={() => this.doSignUp()}/>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SignUpForm;