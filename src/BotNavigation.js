import React, { Component } from 'react';
import { Menu, Button, Icon, Progress, Segment, Grid, Label, GridColumn, Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Sound from 'react-sound';


export default class BotNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: Sound.status.PAUSED,
            position: 0,
            volume: 100,
            playbackRate: 1,
            loop: false,
            url: "https://aredir.nixcdn.com/NhacCuaTui976/MuonRuouToTinh-EmilyBigDaddy-5871420_hq.mp3?st=yxHQqsuBFqj-MUVgFMPRkw&e=1555395904&download=true"
        }
    }
    
    getStatusButtonText() {
        switch (this.state.playStatus) {
          case Sound.status.PLAYING:
            return 'pause';
          case Sound.status.PAUSED:
            return 'playing';
          case Sound.status.STOPPED:
            return 'playing';
          default:
            return 'x';
        }
    }

    handleSongPlaying = () => {
        console.log(this.state.position)
    }

    handleSongLoading = () => {
    }

    handleSongFinishedPlaying = () => {
        this.changeStateToPaused();
    }

    onPlaybackClicked = (e) => {
        if (this.state.playStatus === Sound.status.PLAYING) {
            this.setState({playStatus: Sound.status.PAUSED});
        } else {
            this.setState({playStatus: Sound.status.PLAYING});
        }
    }

    render() {
        return (
            <div>
                <Sound url={this.state.url}
                    playStatus={this.state.playStatus}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    autoLoad="true"
                    position={(pos) => this.setState({ position: pos })}
                />

                <Menu fixed="bottom" size="huge" widths="12">
                    <Grid centered stretched fluid widths="12" style={{ width: "80%" }}>
                        <Grid.Row stretched>
                            <Grid.Column width={3} textAlign="center" stretched>
                                <Button.Group>
                                    <Button icon="step backward" />
                                    <Button icon={this.getStatusButtonText()} onClick={this.onPlaybackClicked} />
                                    <Button icon="step forward" />
                                    <Button icon='shuffle' />
                                    <Button icon='repeat' />
                                </Button.Group>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign="left" verticalAlign="middle" stretched>
                                <Label size="medium" >Hello World</Label>
                            </Grid.Column>
                            <Grid.Column width={4} textAlign="center" verticalAlign="middle" stretched>
                                <Label size="medium">Hello World</Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Menu>
            </div>
        )
    }
}