export default (selectedSong = null, action ) => {
    console.log("SongSelectReducer: ", selectedSong)
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}