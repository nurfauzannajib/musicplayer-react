import React from "react";

const LibrarySongs = ({ song }) => {
  return (
    <div className="library-song">
      <img src={song.cover} alt="cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
