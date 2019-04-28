import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class TopNavigation extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu fixed="top" size="large">
                    <Menu.Item
                        name='editorials'
                        active={activeItem === 'editorials'}
                        onClick={this.handleItemClick}
                    >
                        Logo Here
                    </Menu.Item>

                    <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                        Homepage
                    </Menu.Item>

                    <Menu.Item
                        name='upcomingEvents'
                        active={activeItem === 'upcomingEvents'}
                        onClick={this.handleItemClick}
                    >
                        Bla
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}