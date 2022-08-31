window.onload = () => {

/* ações para o carregamgento dinamico dos elementos da página */
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

/* ações para os botões */
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

/* ações para o palyer */
const audio_player = document.getElementById('music-player');

let current_song_index;
let next_song_index;

let songs = [
      {
        title: 'NEPOEG x Zendec - Baofeng (Official Audio)',
        artist: 'NEPOEG & Zendec',
        song_path:'music/baofeng.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'NEPOEG x Zendec - Vox Club (Original Mix)',
        artist: 'NEPOEG & Zendec',
        song_path: 'music/voxclub.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Cute Cat (VIP)',
        artist: 'Zendec',
        song_path: 'music/cat.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Ellegance (Official Audio)',
        artist: 'Zendec',
        song_path: 'music/ellegance.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Sequence (Original Mix)',
        artist: 'Zendec',
        song_path: 'music/sequence.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Emytec (Original Mix)',
        artist: 'Zendec',
        song_path: 'music/emytec.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Fight (Original Mix)',
        artist: 'Zendec',
        song_path: 'music/fight.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Tempmal (Official Audio)',
        artist: 'Zendec',
        song_path: 'music/tempmal.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Sun Goes Down (VIP)',
        artist: 'Zendec',
        song_path: 'music/down.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Zenffect (Official Audio)',
        artist: 'Zendec',
        song_path: 'music/zenffect.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Lynec (Official Audio)',
        artist: 'Zendec',
        song_path: 'music/lynec.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Musata - Real Bass (Zendec Remix)',
        artist: 'Zendec',
        song_path: 'music/musata.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Zendec - Classic (Official Audio)',
        artist: 'Zendec',
        song_path: 'music/classic.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'BossFight - Work (Zendec Remix)',
        artist: 'Zendec',
        song_path: 'music/work.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'RL Grime - I Wanna Know (NEPOEG Remix)',
        artist: 'NEPOEG',
        song_path: 'music/wanna.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Fluencee - Foxgloves (NEPOEG Remix)',
        artist: 'NEPOEG',
        song_path: 'music/fluencee.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'NEPOEG - Saturn (ft.Zendec Tyrone)',
        artist: 'NEPOEG & Zendec',
        song_path: 'music/saturn.mp3',
        img_path: './assets/images/101.gif'
    },
    {
        title: 'Lui Hill - 5000 Miles (Zendec Edit)',
        artist: 'Zendec',
        song_path: 'music/Miles.ogg',
        img_path: './assets/images/101.gif'
    },

]

play_btn.addEventListener('click', TogglePlaySong);
next_btn.addEventListener('click', () => ChangeSong());
prev_btn.addEventListener('click', () => ChangeSong(false));

/* ação para iniciar o player */
InitPlayer();

function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
}

/* ação para atualizar o player */
function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url('" + song.img_path + "')";
    song_title_el.innerText = song.title;
    song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " +  songs[next_song_index].artist;

    audio_player.src = song.song_path;
}

function TogglePlaySong() {
    if (audio_player.paused) {
        audio_player.play();
        play_btn_icon.classList.remove('fa-play');
        play_btn_icon.classList.add('fa-pause');
    } else {
        audio_player.pause();
        play_btn_icon.classList.add('fa-play');
        play_btn_icon.classList.remove('fa-pause');

    }
}

function ChangeSong (next = true ) {
    if (next) {
        current_song_index++;
        next_song_index = current_song_index +1;

        if (current_song_index > songs.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
        }

        if (next_song_index > songs.length - 1) {
            next_song_index = 0;
        }
    } else {
        current_song_index--;
        next_song_index = current_song_index + 1;

        if (current_song_index < 0) {
            current_song_index = songs.length - 1;
            next_song_index = 0;
        }

    }

    UpdatePlayer();
    TogglePlaySong();
}

}
