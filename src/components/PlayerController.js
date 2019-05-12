import React, { Component } from 'react'
import { Grid, Progress, Button, Popup } from 'semantic-ui-react'
import Sound from 'react-sound'

import 'semantic-ui-css/semantic.min.css'

export default class PlayerController extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getStatusButtonText() {
        switch (this.props.playStatus) {
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


    render() {
        return (
            <div>
                <Grid stackable centered stretched>
                    <Grid.Column>
                        <Button.Group >

                            <Button basic
                                icon="step backward"
                                onClick={() => this.props.playPrevSong()}
                            />

                            <Button basic
                                icon={this.getStatusButtonText()}
                                onClick={() => this.props.onPlaybackClicked()}
                            />

                            <Button basic
                                icon="step forward"
                                onClick={() => this.props.playNextSong()}
                            />

                            <Button basic
                                icon='repeat'
                                color={this.props.loop === true ? "orange" : null}
                                onClick={() => this.props.triggerLoop()}
                            />
                            <Popup
                                flowing 
                                hoverable
                                trigger={
                                    <Button basic
                                        icon={(this.props.muted === true && this.props.volume === 0) ? 'volume off' : this.props.volume > 50 ? 'volume up' : 'volume down'}
                                        onClick={() => this.props.triggerMuted()}
                                    />}
                                style={{
                                    padding: 0
                                }}
                            >
                                <Progress 
                                    // percent={this.props.volume}
                                    id="volume-control"
                                    size="small"
                                    color="orange"
                                    progress='value'
                                    value={Math.floor(this.props.volume)}
                                    style={{
                                        width: 200,
                                        margin: 10,
                                    }}
                                    onClick={(e) => {
                                        e.persist();
                                        var offSetX = e.nativeEvent.offsetX;
                                        var clientWidth = document.getElementById('volume-control').clientWidth;
                                        var fraction = (offSetX / clientWidth) * 100;
                                        this.props.setVolume(fraction);
                                    }}
                                >
                                </Progress>
                            </Popup>
                        </Button.Group>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}