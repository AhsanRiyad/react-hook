import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    useEffect(()=>{
        console.log('i am inside use effect');
    })

    const [songs, setSongs] = useState([
        { title: 'riyad', id: 1 },
        { title: 'ahsan', id: 2 },
    ])

    const [age , setAge] = useState(20); 
        

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
            <button onClick={ ()=>{ setAge(age+1) } }  > age :  { age } </button>

        </div>
    );
}
export default SongList;