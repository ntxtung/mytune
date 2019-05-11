import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
} 

export const fetchSongs = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/songs/${id}`)
    dispatch({type: 'FETCH_SONGS', payload: response.data})
} 