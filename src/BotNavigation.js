import React, { Component } from 'react';
import { Menu, Button, Icon, Progress, Segment, Grid, Label, GridColumn, Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Sound from 'react-sound';
import DemoSong from './DemoSong'


export default class BotNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: Sound.status.PAUSED,
            position: 0,
            volume: 50,
            playbackRate: 1,
            loop: true,
            shuffle: false,
            autoLoad: true,
            currentSong: DemoSong[0],
            bytesLoaded: 0,
            bytesTotal: 0,
            duration: 0
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

    playPrevSong = () => {
        if (this.state.loop === true) {
            this.setState({
                position: 0
            })
        } else {
            this.setState({
                currentSong: DemoSong[0],
                position: 0
            })
        }
    }

    playNextSong = () => {
        if (this.state.loop === true) {
            this.setState({
                position: 0
            })
        } else {
            this.setState({
                currentSong: DemoSong[1],
                position: 0
            })
        }

    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    pauseSong = () => {
        this.setState({
            playStatus: Sound.status.PAUSED
        })
    }

    onPlaybackClicked = (e) => {
        if (this.state.playStatus === Sound.status.PLAYING) {
            this.setState({ playStatus: Sound.status.PAUSED });
        } else {
            this.setState({ playStatus: Sound.status.PLAYING });
        }
    }

    render() {
        return (
            <div>
                <Sound
                    url={this.state.currentSong.url}
                    playStatus={this.state.playStatus}
                    onLoading={({ bytesLoaded, bytesTotal, duration }) => {
                        this.setState({
                            bytesLoaded: bytesLoaded,
                            bytesTotal: bytesTotal,
                            duration: duration
                        })
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
                    onFinishedPlaying={this.playNextSong}
                    onError={(errorCode, description) => {
                        console.log(">> Errorrrr")
                        console.log("Error Code: " + errorCode)
                        console.log("Description: " + description)
                    }}
                    autoLoad={this.state.autoLoad}
                    loop={this.state.loop}
                    playbackRate={this.state.playbackRate}
                    position={this.state.position}
                />

                <Menu fixed="bottom" size="huge" widths="12">
                    <Grid centered stretched fluid widths="12" style={{ width: "80%" }} >
                        <Grid.Row stretched>

                            <Grid.Column width={3} textAlign="center" stretched>
                                <Button.Group >

                                    <Button basic
                                        icon="step backward"
                                        onClick={this.playPrevSong}
                                    />

                                    <Button basic
                                        icon={this.getStatusButtonText()}
                                        onClick={this.onPlaybackClicked}
                                    />

                                    <Button basic
                                        icon="step forward"
                                        onClick={this.playNextSong}
                                    />

                                    <Button basic
                                        icon='shuffle'
                                        color={this.state.shuffle === true ? "orange" : "white"}
                                        onClick={() => {
                                            this.setState({ shuffle: !this.state.shuffle })
                                        }}
                                    />

                                    <Button basic
                                        icon='repeat'
                                        color={this.state.loop === true ? "orange" : "white"}
                                        onClick={() => {
                                            this.setState({ loop: !this.state.loop })
                                        }}
                                    />

                                </Button.Group>
                            </Grid.Column>

                            <Grid.Column width={8} verticalAlign="middle" stretched>
                                <Progress   id="Song-process"
                                            percent={(this.state.position / this.state.duration) * 100} 
                                            size="small" 
                                            color="orange"
                                            label={this.millisToMinutesAndSeconds(this.state.position)}
                                            onClick={(e) => {
                                                e.persist();
                                                var offSetX = e.nativeEvent.offsetX;
                                                var clientWidth = document.getElementById('Song-process').clientWidth;
                                                var fraction = (offSetX / clientWidth) * this.state.duration;
                                                this.setState({position: fraction})
                                            }}>
                                    {this.state.currentSong.title} - {this.state.currentSong.artist}
                                </Progress>


                            </Grid.Column>

                            <Grid.Column width={4} verticalAlign="middle" stretched>

                                <Label size="medium">Hello World</Label>

                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Menu>
            </div>
        )
    }
}