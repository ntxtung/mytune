import React, { Component } from 'react'
import { Icon, Grid, Image, Button } from 'semantic-ui-react'
import PlaylistController from './PlaylistController'
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
                <Grid stackable>
                    <Grid.Row stretched>
                        <Grid.Column width={2} style={{ padding: 0 }}>
                            <Image src={this.props.currentSong.imageUrl.length === 0 ? process.env.PUBLIC_URL+'/temp/defaultImg2.png' : this.props.currentSong.imageUrl}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '35px',
                                    maxHeight: '35px'
                                }} />
                        </Grid.Column>
                        <Grid.Column width={9} style={{ padding: 0, marginLeft: 5 }}>
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
                                <PlaylistController>

                                </PlaylistController>

                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}