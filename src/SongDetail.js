import React, { Component } from 'react'
import { Icon, Grid, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class SongDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={{ justifyContent: 'left' }}>
                <Grid fluid stackable>
                    <Grid.Row stretched fluid>
                        <Grid.Column fluid width={2} style={{ padding: 0 }}>
                            <Image src={this.props.currentSong.img}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '35px',
                                    maxHeight: '35px'
                                }} />
                        </Grid.Column>
                        <Grid.Column fluid width={9} style={{ padding: 0 }}>
                            <b>{this.props.currentSong.title}</b>
                            {this.props.currentSong.artist}
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group>
                                <Button basic
                                    onClick={() => {
                                        // this.setState({ isLoved: !this.props.currentSong.isLoved })
                                    }}
                                >
                                    <Icon name="like"
                                        color={this.props.currentSong.isLoved === true ? "orange" : "black"} />
                                </Button>
                                <Button basic
                                    icon="list"
                                    onClick={() => {

                                    }}
                                />
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}