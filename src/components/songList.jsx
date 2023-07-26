import React from 'react';
import defeater from '../assets/defeater.mp3';

const SongList = ({ onSongSelect }) => {
  const songs = [
    {
      name: 'Song 1',
      url: defeater,
    },
    {
      name: 'Song 2',
      url: defeater,
    },
    // Add more songs here
  ];

  const handleSongClick = (song) => {
    onSongSelect(song.url); // Pass only the 'url' property to the parent component
  };

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <button onClick={() => handleSongClick(song)}>{song.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
