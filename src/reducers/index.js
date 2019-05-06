import { combineReducers } from 'redux'

const songs = [
    {
        id: '01',
        url: process.env.PUBLIC_URL + '/testSongs/Yeu-Roi-Day-Juky-San-Helia.mp3',
        title: 'Yêu rồi đấy',
        artist: 'Juky San - Helia',
        img: 'https://avatar-nct.nixcdn.com/song/2019/02/20/d/7/e/b/1550644691499_640.jpg',
        isLoved: true
    },
    {
        id: '02',
        url: process.env.PUBLIC_URL + '/testSongs/Yeu-Em-Dai-Kho-Cover-Juky-San.mp3',
        title: 'Yêu Em Dại Khờ',
        artist: 'Juky San',
        img: 'https://avatar-nct.nixcdn.com/song/2019/02/20/d/7/e/b/1550644691499_640.jpg',
        isLoved: true
    },    
    {
        id: '03',
        url: process.env.PUBLIC_URL + '/testSongs/Beertalks-CaHoiHoang-5945286_hq.mp3',
        title: 'Beertalks',
        artist: 'Cá Hồi Hoang',
        img: 'http://avatar.nct.nixcdn.com/singer/avatar/2017/11/15/6/3/7/1/1510721455037.jpg',
        isLoved: true
    },
    {
        id: '04',
        url: process.env.PUBLIC_URL + '/testSongs/ILikeMeBetterLauv.flac',
        title: 'I like me better',
        artist: 'Lauv',
        img: 'https://i1.sndcdn.com/artworks-000355509837-e1mdg8-t200x200.jpg',
        isLoved: true
    },
    {
        id: '05',
        url: process.env.PUBLIC_URL + '/testSongs/ChuyenCuaTaGleeGiaThieu.flac',
        title: 'Chuyện của ta',
        artist: 'Glee Gia Thiều',
        img: 'https://i1.sndcdn.com/artworks-000437493624-scd9p0-t200x200.jpg',
        isLoved: true
    },
    {
        id: '06',
        url: process.env.PUBLIC_URL + '/testSongs/Sheep.mp3',
        title: 'Không biết tên',
        artist: 'The Sheep',
        img: 'http://giadinhviet.net/wp-content/uploads/2019/01/The-sheep-band-40-600x400.jpg',
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