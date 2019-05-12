import React, { Component } from 'react';
import { Menu, Container, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {connect} from 'react-redux'
import {} from '../actions'

class TopNavigation extends Component {
    state = {}

    render() {
        
        return (
            <div>
                <Menu fixed="top" size="medium" inverted>
                    <Container>
                        <Menu.Item
                            as='a'
                            header
                            name='editorials'
                        >
                            <Image size='mini' src={process.env.PUBLIC_URL+'/256.png'} style={{ marginRight: '1.5em' }} />
                            My Tune
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                Hello
                            </Menu.Item>
                        </Menu.Menu>
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