import React, { Component } from 'react';
import { Menu, Button, Icon, Progress, Segment, Grid, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Sound from 'react-sound';


export default class BotNavigation extends Component {
    state = {
        playStatus: "PLAYING", 
        playbackBtnName: "pause",
        url: "https://aredir.nixcdn.com/NhacCuaTui976/MuonRuouToTinh-EmilyBigDaddy-5871420_hq.mp3?st=yxHQqsuBFqj-MUVgFMPRkw&e=1555395904&download=true"}

    changeStateToPlaying() {
        this.setState({playStatus: "PLAYING", playbackBtnName: "pause"})
    }
    
    changeStateToPaused() {
        this.setState({playStatus: "PAUSED", playbackBtnName: "play"})
    }

    handleSongPlaying = () => {

    }

    handleSongLoading = () => {

    }

    handleSongFinishedPlaying = () => { 
        this.changeStateToPaused();
    }

    onPlaybackClicked = (e) => {
        if (this.state.playStatus === "PLAYING"){
            this.changeStateToPaused();
        } else {
            this.changeStateToPlaying();
        }
    } 

    render() {
        return (
            <div>
                <Sound  url={this.state.url}
                        playStatus={this.state.playStatus}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying} 
                        autoLoad="true"
                />

                <Menu fixed="bottom" size="huge">
                    <Grid>
                        <Grid.Row fluid stretched>
                            <Grid.Column width={4} fluid stretched>
                                <Button.Group >
                                    <Button icon="step backward"/>
                                    <Button icon={this.state.playbackBtnName} onClick={this.onPlaybackClicked}/>
                                    <Button icon="step forward"/>                                    
                                    <Button icon='shuffle' />
                                </Button.Group>
                            </Grid.Column>

                            {/* <Grid.Column width={2} fluid stretched>
                                <Label></Label>
                            </Grid.Column> */}
                        </Grid.Row>

                    </Grid>
                </Menu>
            </div>
        )
    }
}