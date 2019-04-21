export default class PlayList {
    static currentIndex = 0;
    static songs = [
        {
            id: '01',
            url: 'https://aredir.nixcdn.com/NhacCuaTui942/ILikeMeBetter-Lauv-4940820_hq.mp3?st=UyvAdQU-m1uMRotG0uTgGQ&e=1555924063&download=true',
            title: 'I like me better',
            artist: 'Lauv',
            img: 'https://i1.sndcdn.com/artworks-000355509837-e1mdg8-t200x200.jpg',
            isLoved: true
        },
        {
            id: '02',
            url: 'https://aredir.nixcdn.com/NhacCuaTui978/ChuyenCuaTa-GleeGiaThieu-5895245_hq.mp3?st=cmbZIUKNSQZIAkZbRjpZuw&e=1555924203&download=true',
            title: 'Chuyện của ta',
            artist: 'Glee Gia Thiều',
            img: 'https://i1.sndcdn.com/artworks-000437493624-scd9p0-t200x200.jpg',
            isLoved: false
        },
        {
            id: '03',
            url: 'https://aredir.nixcdn.com/NhacCuaTui968/NangDem-TruongAn-5618039_hq.mp3?st=hOhPBDuSTlKaDCnoumNpzQ&e=1555924126&download=true',
            title: 'Nắng đêm',
            artist: 'T.R.I, Trường An',
            img: 'https://i1.sndcdn.com/artworks-000296922480-0s8gm0-t200x200.jpg',
            isLoved: true
        },
        {
            id: '04',
            url: 'https://aredir.nixcdn.com/NhacCuaTui969/BenAyBenNay-LongCao-5097837_hq.mp3?st=lgJF2TRo1WDq24EzNApcrA&e=1555924236&download=true',
            title: 'Bên ấy bên này',
            artist: 'Long Cao',
            img: 'https://i1.sndcdn.com/artworks-000237130424-0iov41-t200x200.jpg',
            isLoved: true
        },
    ];

    static getCurrentSong = () => {
        return this.songs[this.currentIndex]
    } 

    static stepForward = () => {
        if (this.currentIndex === this.songs.length - 1) {
            this.currentIndex = 0;
            return this.songs[this.currentIndex];
        } else {
            this.currentIndex++;
            return this.songs[this.currentIndex];
        }
    }

    static stepBackward = () => {
        if (this.currentIndex === 0) {
            this.currentIndex = this.songs.length - 1;
            return this.songs[this.currentIndex];
        } else {
            this.currentIndex--;
            return this.songs[this.currentIndex];
        }
    }
}