import React, { Component } from 'react'
import { Button, Modal, Item, ButtonGroup } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'
import 'semantic-ui-css/semantic.min.css'

class PlaylistController extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const renderedPlaylist = this.props.songs.map((song) => {
            
            return (
                <Item >
                    <Item.Image size="tiny" src={song.img} />
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
                                            song.isLoved = !song.isLoved
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
                <Modal closeIcon dimmer="blurring" trigger={<Button basic icon="list" />}>
                    <Modal.Header>Playlist</Modal.Header>
                    <Modal.Content>
                        <Item.Group divided>
                            {renderedPlaylist}
                        </Item.Group>

                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {songs: state.songs, selectedSong: state.selectedSong};
}

export default connect(mapStateToProps, {selectSong})(PlaylistController);