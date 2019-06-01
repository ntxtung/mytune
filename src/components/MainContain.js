import React from 'react'
import { Container, Item, Button, ButtonGroup, Dimmer } from 'semantic-ui-react'

import {connect} from 'react-redux'
import {selectSong} from '../actions'


class MainContain extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        const renderedPlaylist = this.props.songs.map((song) => {   
            console.log(song)  
            return (
                <Item key={song._id}>
                    <Item.Image wrapped size="tiny" src={song.image === null ? 'https://www.upsieutoc.com/images/2019/05/31/defaultImg.png' : song.image} />
                    <Item.Content>
                        <Item.Header>
                            {song.title}
                        </Item.Header>
                        <Item.Meta>
                            {song.artist}
                        </Item.Meta>
                        <Item.Description>
                            <ButtonGroup basic floated="right">
                                <Button icon="like"
                                        onClick={() => {
                                            // song.isLoved = !song.isLoved
                                        }}
                                />
                                <Button icon="play" 
                                        onClick={() => {
                                            this.props.selectSong(song)
                                        }}
                                />
                            </ButtonGroup>
                        </Item.Description>
                    </Item.Content>
                </Item>
            )
        })

        return (
            <div>
                <Container style={{marginTop: '6em'}}>
                    <Item.Group divided>
                            {renderedPlaylist}
                    </Item.Group>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("MainContain: ", state);
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {selectSong})(MainContain)