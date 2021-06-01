import React from 'react';

const Song = ({currentSong, isPlaying, playSongHandler}) => {
    let rotateImg = isPlaying ? { animation: "spin 20s linear infinite" } : {};

    return(
        <div className="song-container">
            <img src={currentSong.cover} style={rotateImg} alt="Your browser does not support this extension" onClick={playSongHandler} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};


export default Song;