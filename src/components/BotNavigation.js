import React, { Component } from 'react';
import { Menu, Grid, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Sound from 'react-sound';

import SongDetail from './SongDetail'
import PlayerController from './PlayerController'
import SoundSeeker from './SoundSeeker'

import {connect} from 'react-redux'
import {selectSong} from '../actions'

class BotNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: Sound.status.PLAYING,
            position: 0,
            volume: 100,
            playbackRate: 1,
            loop: false,
            shuffle: false,
            autoLoad: true,
            bytesLoaded: 0,
            bytesTotal: 0,
            duration: 0,
            muted: false,
        }
    }

    onChangeSong = () => {
        this.setState({
            position: 0,
            bytesLoaded: 0,
            bytesTotal: 0,
        })
    }

    playPrevSong = () => {
        var currentIndex = this.props.playlist.indexOf(this.props.selectedSong)
        if (this.state.position < 2000){
            this.setState({position: 0})
        } else {
            if (currentIndex === 0) {
                this.setState({position: 0, playStatus: Sound.status.PAUSED})
            } else {
                this.props.selectSong(this.props.playlist[currentIndex-1])
            }
        }
    }

    playNextSong = () => {
        var currentIndex = this.props.playlist.indexOf(this.props.selectedSong)
        if (currentIndex === this.props.playlist.length-1){
            this.props.selectSong(this.props.playlist[0])
            this.setState({playStatus: Sound.status.PAUSED})
        } else {
            this.props.selectSong(this.props.playlist[currentIndex+1])
        }
    }

    triggerShuffle = () => {
        console.log("Trigger Shuffle")
        this.setState({ shuffle: !this.state.shuffle })
    }

    triggerLoop = () => {
        console.log("Trigger Loop")
        this.setState({ loop: !this.state.loop })
    }

    triggerMuted = () => {
        console.log("Trigger Muted")
        this.setState({ muted: !this.state.muted })
    }

    setVolume = (newVolume) => {
        this.setState({ volume: newVolume })
        console.log("Set Volume to " + newVolume)
    }

    playSong = () => {
        this.setState({
            playStatus: Sound.status.PLAYING
        })
    }

    pauseSong = () => {
        this.setState({
            playStatus: Sound.status.PAUSED
        })
    }

    onPlaybackClicked = (e) => {
        if (this.state.playStatus === Sound.status.PLAYING) {
            this.pauseSong();
        } else {
            this.playSong();
        }
    }

    onFinishedPlaying = () => {
        console.log("Finished Playing")
        this.playNextSong()
    }

    setPosition = (newPosition) => {
        this.setState({ position: newPosition })
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("Position / Duration: " , this.state.position, this.state.duration)
        if (this.state.position > this.state.duration - 200 && this.state.playStatus === Sound.status.PLAYING) {
            this.onFinishedPlaying()
        }
        if (prevProps.selectedSong !== this.props.selectedSong){
            this.onChangeSong();
        }
    }

    render() {
        if (this.props.selectedSong){
            return (
                <div>                
                    <Sound
                        url={this.props.selectedSong.url}
                        playStatus={this.state.playStatus}
                        onLoading={({ bytesLoaded, bytesTotal, duration }) => {
                            this.setState({
                                bytesLoaded: bytesLoaded,
                                bytesTotal: bytesTotal,
                                duration: duration
                            })
                            // console.log("BytesLoaded: ", this.state.bytesLoaded);
                            // console.log("BytesTotal: ", this.state.bytesTotal);
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
                        onFinishedPlaying={() => this.onFinishedPlaying}
                        onError={(errorCode, description) => {
                            this.pauseSong()
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
    
                    <Menu compact fixed="bottom" size="tiny" widths="16" >
                        <Container>
                            <Grid stackable centered stretched widths="16" style={{width: "100%"}}>
                                <Grid.Row stretched>
                                    <Grid.Column width={3} textAlign="center">
                                        <PlayerController
                                            playStatus={this.state.playStatus}
                                            muted={this.state.muted}
                                            shuffle={this.state.shuffle}
                                            loop={this.state.loop}
                                            volume={this.state.volume}
        
        
                                            playPrevSong={this.playPrevSong}
                                            playNextSong={this.playNextSong}
                                            onPlaybackClicked={this.onPlaybackClicked}
                                            triggerShuffle={this.triggerShuffle}
                                            triggerLoop={this.triggerLoop}
                                            triggerMuted={this.triggerMuted}
                                            setVolume={this.setVolume}
                                        />
                                    </Grid.Column>
        
                                    <Grid.Column width={9} stretched verticalAlign="middle">
                                        <SoundSeeker
                                            position={this.state.position}
                                            duration={this.state.duration}
                                            setPosition={this.setPosition}
                                            bytesLoaded={this.state.bytesLoaded}
                                            bytesTotal={this.state.bytesTotal}
                                        />
                                    </Grid.Column>
        
                                    <Grid.Column width={4} stretched>
        
                                        <SongDetail
                                            currentSong={this.props.selectedSong}
                                        />
        
                                    </Grid.Column>
        
                                </Grid.Row>
                            </Grid>
                        </Container>
                        
                    </Menu>
                </div>
            )
        } else {
            return (<div>
                <Menu fixed="bottom" size="tiny">Please select song</Menu>
                
            </div>)
        }
        
    }
}


const mapStateToProps = (state) => {
    console.log("BotNavigation: ",state);
    return {
        selectedSong: state.selectedSong,
        playlist: state.playlist
    };
}

export default connect(mapStateToProps, {selectSong})(BotNavigation)