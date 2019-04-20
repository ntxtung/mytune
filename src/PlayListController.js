import React, { Component } from 'react'
import { Icon, Grid, Image, Label, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import DemoSong from './DemoSong'

export default class PlayListController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // currentSong: DemoSong[0],
            isLoved: false
        }
    }

    render() {
        return (
            <div style={{ justifyContent: 'left' }}>
                <Grid fluid stackable>
                    <Grid.Row stretched fluid>
                        <Grid.Column fluid width={2} style={{ padding: 0 }}>
                            <Image src={this.props.img}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    'max-width': '35px',
                                    'max-height': '35px'
                                }} />
                        </Grid.Column>
                        <Grid.Column fluid width={9} style={{ padding: 0 }}>
                            <b>{this.props.title}</b>
                            {this.props.artist}
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group>
                                <Button basic
                                    onClick={() => {
                                        this.setState({ isLoved: !this.state.isLoved })
                                    }}
                                >
                                    <Icon name="like"
                                        color={this.state.isLoved === true ? "orange" : "black"} />
                                </Button>
                                <Button basic
                                    icon="list"
                                // onClick={}
                                />
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}