import { combineReducers } from 'redux'
const songs = [
    {
        id: '01',
        url: 'https://data.chiasenhac.com/dataxx/00/downloads/1812/0/1811216-d07b2f9c/320/I%20Like%20Me%20Better%20-%20Lauv.mp3',
        title: 'I like me better',
        artist: 'Lauv',
        img: 'https://i1.sndcdn.com/artworks-000355509837-e1mdg8-t200x200.jpg',
        isLoved: true
    },
    {
        id: '02',
        url: 'https://data.chiasenhac.com/dataxx/25/downloads/2000/0/1999211-23d9d4fa/320/Chuyen%20Cua%20Ta%20-%20Glee%20Gia%20Thieu.mp3',
        title: 'Chuyện của ta',
        artist: 'Glee Gia Thiều',
        img: 'https://i1.sndcdn.com/artworks-000437493624-scd9p0-t200x200.jpg',
        isLoved: false
    },
    {
        id: '03',
        url: 'https://data.chiasenhac.com/dataxx/34/downloads/1949/0/1948154-31d049b5/320/Nang%20Dem%20-%20T_R_I.mp3',
        title: 'Nắng đêm',
        artist: 'T.R.I, Trường An',
        img: 'https://i1.sndcdn.com/artworks-000296922480-0s8gm0-t200x200.jpg',
        isLoved: true
    },
    {
        id: '04',
        url: 'https://data.chiasenhac.com/dataxx/00/downloads/1812/0/1811066-1a51106a/128/Ben%20Ay%20Ben%20Nay%20-%20Cao%20Long.mp3',
        title: 'Bên ấy bên này',
        artist: 'Long Cao',
        img: 'https://i1.sndcdn.com/artworks-000237130424-0iov41-t200x200.jpg',
        isLoved: true
    },
    {
        id: '05',
        url: 'https://data.chiasenhac.com/dataxx/2/downloads/1725/0/1724309-d1acde56/320/Co%20Khi%20-%20Nguyen%20Tuan%20Phong.mp3',
        title: 'Có Khi',
        artist: 'Nguyễn Tuấn Phong',
        img: 'https://i1.sndcdn.com/artworks-000153394522-ne16t5-t200x200.jpg',
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