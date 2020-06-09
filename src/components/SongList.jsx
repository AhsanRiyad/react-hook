import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'riyad', id: 1 },
        { title: 'ahsan', id: 2 },
    ])

    const addSong = (title) => {
        setSongs([
            ...songs,
            { title, id: 3 }
        ])
    }

    return (
        <div>
            <ul className="song-list">
                {
                    songs.map((song) => {
                        return (<li key={song.id}>  {song.title} </li>)
                    })
                }
            </ul>
            {/* <button onClick={addSong} > Add Song </button> */}
            
            <NewSongForm  addSong={addSong} />

        </div>
    );
}
export default SongList;