import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Sound from 'react-sound';
import DemoSong from './DemoSong'

import PlayListController from './PlayListController'
import PlayerController from './PlayerController'
import SoundSeeker from './SoundSeeker'


export default class BotNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: Sound.status.PAUSED,
            position: 0,
            volume: 100,
            playbackRate: 1,
            loop: false,
            shuffle: false,
            autoLoad: true,
            currentSong: DemoSong[0],
            bytesLoaded: 0,
            bytesTotal: 0,
            duration: 0,
            muted: false
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
        console.log("Play Prev Song")
    }

    triggerShuffle = () => {
        console.log("Trigger Shuffle")
    }

    triggerLoop = () => {
        console.log("Trigger Loop")
    }

    triggerMuted = () => {
        console.log("Trigger Muted")
    }

    setVolume = (newVolume) => {
        this.setState({volume: newVolume})
        console.log("Set Volume to " + newVolume)
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
        console.log("Play Next Song")
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

    setPosition = (newPosition) => {
        this.setState({position: newPosition})
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
                        console.log("BytesLoaded: ", this.state.bytesLoaded);
                        console.log("BytesTotal: ", this.state.bytesTotal)
                    }}
                    volume={this.state.volume}
                    onPlaying={({ position }) => {
                        this.setState({ position });
                    }}
                    onLoad={() => {
                        console.log("Song Loaded!");
                        /*Stupid code*/
                        this.setState({
                            bytesLoaded: 1,
                            bytesTotal: 1
                        })
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
                    muted={this.state.muted}
                />

                <Menu fixed="bottom" size="tiny" widths="18">
                    <Grid stackable centered stretched fluid widths="18" style={{ width: "90%" }} >
                        <Grid.Row stretched>
                            <Grid.Column width={3} textAlign="center">
                                <PlayerController 
                                    playStatus = {this.state.playStatus}
                                    muted = {this.state.muted}
                                    shuffle = {this.state.shuffle}
                                    loop = {this.state.loop}
                                    volume = {this.state.volume}


                                    playPrevSong = {this.playPrevSong}
                                    playNextSong = {this.playNextSong}
                                    onPlaybackClicked = {this.onPlaybackClicked}
                                    triggerShuffle = {this.triggerShuffle}
                                    triggerLoop = {this.triggerLoop}
                                    triggerMuted = {this.triggerMuted}
                                    setVolume = {this.setVolume}
                                />
                            </Grid.Column>

                            <Grid.Column width={9} stretched verticalAlign="middle">
                                <SoundSeeker
                                    position = {this.state.position}
                                    duration = {this.state.duration}
                                    setPosition = {this.setPosition}
                                    bytesLoaded = {this.state.bytesLoaded}
                                    bytesTotal = {this.state.bytesTotal}
                                />
                            </Grid.Column>

                            <Grid.Column width={4} fluid stretched>

                                <PlayListController title={this.state.currentSong.title} 
                                                    artist={this.state.currentSong.artist}
                                                    img={this.state.currentSong.img}/>

                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Menu>
            </div>
        )
    }
}