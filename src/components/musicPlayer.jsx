import React, { useState } from 'react';
import Visualizer from './Visualizer';
import SongList from './songList';

const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div>
      <SongList onSongSelect={handleSongSelect} />
      {selectedSong && <Visualizer songUrl={selectedSong.url} />}
    </div>
  );
};

export default MusicPlayer;
