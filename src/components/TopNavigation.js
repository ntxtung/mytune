import React, { Component } from 'react';
import { Menu, Container, Image, Button, Item, Dropdown, Search, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { connect } from 'react-redux'
import { } from '../actions'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

class TopNavigation extends Component {
    state = {}

    guestDiv = () => {
        return (
            <div>
                <Modal dimmer="blurring" size="tiny" trigger={<Button as='a' color="orange" inverted={true}>Log In</Button>}>
                    <Modal.Header style={{ textAlign:"center" }}>Please Login to use our features</Modal.Header>
                    <Modal.Description>
                        <LoginForm />
                    </Modal.Description>
                </Modal>
                
                <Modal dimmer="blurring" size="tiny" trigger={<Button as='a' inverted={true} style={{ marginLeft: '0.5em' }}>Sign Up</Button>}>
                    <Modal.Header style={{ textAlign:"center" }}>Member Registration</Modal.Header>
                    <Modal.Description>
                        <SignUpForm />
                    </Modal.Description>
                </Modal>
                
            </div>
        )
    }

    userDiv = () => {
        return (
            <div>
                <Item style={{ padding: 0, paddingRight: '1em' }}>
                    <Item.Image circular size="small" verticalAlign="middle" centered src={this.props.user.avatar} style={{ width: '40px', marginRight: '1.5em' }} />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                            {this.props.user.name}
                        </Item.Header>
                    </Item.Content>
                    <Dropdown item icon='dropdown' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>Account</Dropdown.Item>
                            <Modal size="tiny" trigger={<Dropdown.Item>Upload</Dropdown.Item>}>
                                <Modal.Header style={{ textAlign:"center" }}>Member Registration</Modal.Header>
                                <Modal.Description>
                                    <SignUpForm />
                                </Modal.Description>
                            </Modal>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Item>
            </div>
        )
    }

    render() {

        return (
            <div>
                <Menu fixed="top" size="small" inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={process.env.PUBLIC_URL + '/image/256.png'} style={{ marginRight: '1.5em' }} />
                            My Tune
                        </Menu.Item>
                        <Menu.Item>
                            <Search placeholder="Search"/>
                        </Menu.Item>                        
                        <Menu.Item position='right'>
                            {this.props.user ? this.userDiv() : this.guestDiv()}
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, {})(TopNavigation)