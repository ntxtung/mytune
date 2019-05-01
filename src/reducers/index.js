import { combineReducers } from 'redux'
const songs = [
    {
        id: '01',
        url: 'https://data.chiasenhac.com/dataxx/00/downloads/1822/3/1821560-0eced838/m4a/I%20Like%20Me%20Better%20-%20Lauv.m4a',
        title: 'I like me better',
        artist: 'Lauv',
        img: 'https://i1.sndcdn.com/artworks-000355509837-e1mdg8-t200x200.jpg',
        isLoved: true
    },
    {
        id: '02',
        url: 'https://data.chiasenhac.com/dataxx/25/downloads/2000/3/1999211-23d9d4fa/m4a/Chuyen%20Cua%20Ta%20-%20Glee%20Gia%20Thieu.m4a',
        title: 'Chuyện của ta',
        artist: 'Glee Gia Thiều',
        img: 'https://i1.sndcdn.com/artworks-000437493624-scd9p0-t200x200.jpg',
        isLoved: false
    },
    {
        id: '03',
        url: 'https://data.chiasenhac.com/dataxx/34/downloads/1949/3/1948154-31d049b5/m4a/Nang%20Dem%20-%20T_R_I.m4a',
        title: 'Nắng đêm',
        artist: 'T.R.I, Trường An',
        img: 'https://i1.sndcdn.com/artworks-000296922480-0s8gm0-t200x200.jpg',
        isLoved: true
    },
    
]

const songsReducer = () => {
    return songs
}

const selectedSongReducer = (selectedSong = songs.length > 0 ? songs[0] : null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})