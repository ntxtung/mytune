// import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import mytuneRest from '../apis/mytuneRest'
// import localhost3001 from '../apis/localhost3001'

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const fetchUser = (id) => async dispatch => {
    const response = await mytuneRest.get(`/users/${id}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
} 

export const fetchSong = (id) => async dispatch => {
    const response = await mytuneRest.get(`/songs/${id}`)
    dispatch({type: 'FETCH_SONG', payload: response.data})
} 

export const fetchSongs = () => async dispatch => {
    const response = await mytuneRest.get(`/songs`)
    dispatch({type: 'FETCH_SONGS', payload: response.data})
} 