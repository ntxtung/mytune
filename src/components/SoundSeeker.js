import React, { Component } from 'react'
import { Grid, Progress, Label } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'


export default class PlayerController extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render() {
        
        return (
            <div>
                <Grid stackable centered stretched widths="18"
                    style={{
                        padding: 0
                    }}>
                    <Grid.Column width={2} stretched verticalAlign="middle"
                            style={{
                                padding: 0
                            }}>
                        <Label style={{
                                backgroundColor: "rgba(255, 255, 255, 1.0)",
                                padding: 0
                            }}>
                            {this.millisToMinutesAndSeconds(this.props.position)}
                        </Label>
                    </Grid.Column>
                    <Grid.Column width={12} stretched verticalAlign="middle">
                                <Progress active
                                    id="Song-process"
                                    percent={(this.props.position / this.props.duration) * 100}
                                    size="small"
                                    color="orange"
                                    onClick={(e) => {
                                        e.persist();
                                        var offSetX = e.nativeEvent.offsetX;
                                        var clientWidth = document.getElementById('Song-process').clientWidth;
                                        var fraction = (offSetX / clientWidth) * this.props.duration;
                                        this.props.setPosition(fraction)
                                    }}
                                    style={{
                                        marginBottom: 5
                                    }}
                                    >
                                    <Progress percent={(this.props.bytesLoaded / this.props.bytesTotal) * 100} attached='top' />
                                </Progress>

                            </Grid.Column>
                    <Grid.Column width={2} stretched verticalAlign="middle" 
                        style={{
                            padding: 0
                        }}>
                        <Label style={{
                                backgroundColor: "rgba(255, 255, 255, 1.0)",
                                padding: 0
                            }}>
                            {this.millisToMinutesAndSeconds(this.props.duration)}
                        </Label>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}