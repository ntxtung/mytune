import React from 'react'
import { Container, Item, Button, ButtonGroup, Placeholder } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { selectSong } from '../actions'


class MainContain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const renderPlaceHolder = (
            <Placeholder fluid>
                {Array.from({ length: 10 }, (item, index) => {
                    return (
                        <Placeholder.Header key={index}  image>
                            <Placeholder.Line length="full" />
                            <Placeholder.Line length="full" />
                            <Placeholder.Line length="full" />
                        </Placeholder.Header>
                    )
                })}
            </Placeholder>
        )

        const renderedPlaylist = this.props.songs.map((song) => {
            return (
                <Item key={song._id}>
                    <Item.Image wrapped size="tiny" src={song.imageUrl.length === 0 ? process.env.PUBLIC_URL + '/temp/defaultImg2.png' : song.imageUrl} />
                    
                    <Item.Content>
                        <Item.Header as="a" onClick={(e) => {
                                e.preventDefault()
                                this.props.selectSong(song)
                            }}>
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
                                <Button icon="add"
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
                <Container style={{ paddingTop: '6em', paddingBottom: '6em' }}>
                    <Item.Group divided>
                        <Item>
                            <Item.Header as="h2">Songs List</Item.Header>
                        </Item>
                        {this.props.songs.length > 0 ? renderedPlaylist : renderPlaceHolder}
                        {/* {renderPlaceHolder} */}
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

export default connect(mapStateToProps, { selectSong })(MainContain)