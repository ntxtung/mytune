import React, { Component } from 'react';
import { Container, Form, Input, Icon, Button } from 'semantic-ui-react'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pwd: ''
        }
    }

    doLogin = () => {
        console.log('hello login')
    }

    render() {
        return (
            <div>
                <Container>
                    <Form method="post">
                        <div className="ui stacked secondary segment">
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon name="user" />
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </Input>
                            </Form.Field>
                            <Form.Field>
                                <Input labelPosition="left" icon iconPosition="left">
                                    <Icon className="lock icon" />
                                    <input type="password" name="pwd" placeholder="Password" />
                                </Input>
                            </Form.Field>
                            <Button fluid size="large" color="orange" content="Log In" onClick={() => this.doLogin()} />
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default LoginForm;