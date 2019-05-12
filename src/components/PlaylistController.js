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
        const renderedPlaylist = this.props.playlist.map((song) => {
            
            return (
                <Item key={song.id} >
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
                <Modal closeIcon dimmer="blurring" trigger={<Button basic icon="list" />}
                    style={{
                        display: "none",
                        position: "fixed",
                        overflow: "auto"
                    }}>
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
    return {playlist: state.playlist, selectedSong: state.selectedSong};
}

export default connect(mapStateToProps, {selectSong})(PlaylistController);