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
            volume: 50,
            playbackRate: 1,            
            currentSong: {
                url: "https://aredir.nixcdn.com/NhacCuaTui976/MuonRuouToTinh-EmilyBigDaddy-5871420_hq.mp3?st=yxHQqsuBFqj-MUVgFMPRkw&e=1555395904&download=true",
                bytesLoaded: 1,
                bytesTotal: 1,
                duration: 1
            },
            loop: false,
            shuffle: false
        }
    }
    
    getStatusButtonText() {
        switch (this.state.playStatus) {
          case Sound.status.PLAYING:
            return 'pause';
          case Sound.status.PAUSED:
            return 'play';
          case Sound.status.STOPPED:
            return 'play';
          default:
            return 'x';
        }
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
                <Sound 
                    url="https://aredir.nixcdn.com/NhacCuaTui976/MuonRuouToTinh-EmilyBigDaddy-5871420_hq.mp3?st=yxHQqsuBFqj-MUVgFMPRkw&e=1555395904&download=true"
                    playStatus={this.state.playStatus}
                    onLoading={({ bytesLoaded, bytesTotal, duration }) => {
                        this.setState({currentSong: {
                            bytesLoaded: bytesLoaded,
                            bytesTotal: bytesTotal,
                            duration: duration
                        }});
                    }}
                    volume={this.state.volume}
                    onPlaying={({ position }) => {
                        this.setState({ position });
                    }}
                    onLoad={() => {
                        console.log("Song Loaded!");
                    }}
                    onPause={() => {
                        console.log("Song Paused!");
                    }}
                    onResume={() => {
                        console.log("Song Resume!");
                    }}
                    onStop={() => {
                        console.log("Song Stopped");
                    }}
                    onFinishedPlaying={() => {
                        this.setState({ playStatus: Sound.status.STOPPED })
                    }}
                    autoLoad="true"
                    loop={this.state.loop}
                    playbackRate={this.state.playbackRate}
                    position={this.state.position}
                />

                <Menu fixed="bottom" size="huge" widths="12">
                    <Grid centered stretched fluid widths="12" style={{ width: "80%" }} >
                        <Grid.Row stretched>

                            <Grid.Column width={3} textAlign="center" stretched>
                                <Button.Group >
                                    <Button icon="step backward" />
                                    <Button icon={this.getStatusButtonText()} onClick={this.onPlaybackClicked} />
                                    <Button icon="step forward" />
                                    <Button icon='shuffle' 
                                            color={this.state.shuffle === true ? "orange" : "white"}
                                            onClick={() => {
                                                this.setState({shuffle: !this.state.shuffle})
                                            }}
                                            />
                                    <Button icon='repeat' 
                                            color={this.state.loop === true ? "orange" : "white"}
                                            onClick={() => {
                                                this.setState({loop: !this.state.loop})
                                            }}
                                            />
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