import React, { useState } from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'riyad', id: 1 },
        { title: 'ahsan', id: 2 },
    ])
    return (
        <div>
            <ul className="song-list">
                {
                    songs.map((song) => {
                        return ( <li key={song.id}>  {song.title} </li> )
                    })
                }
            </ul>
        </div>
    );
}
export default SongList;