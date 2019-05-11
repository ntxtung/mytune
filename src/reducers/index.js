import { combineReducers } from 'redux'
import songSelectedReducer from './songSelectedReducer'
import songsReducer from './songsReducer'
import playlistReducer from './playlistReducer'
import userReducer from './userReducers'

export default combineReducers({
    songs: songsReducer,
    user: userReducer,
    selectedSong: songSelectedReducer,
    playlist: playlistReducer
})