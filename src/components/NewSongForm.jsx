import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
    const [song , setSong] = useState('') ;
    const handleSubmit = (e)=>{
        e.preventDefault();
        addSong(song);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required onChange={ e=>setSong(e.target.value) }/>
            <input type="submit" value="add a song" />
        </form>
    )
}
export default NewSongForm;