import React, { useState } from 'react';
import Visualizer from '../components/Visualizer';
import Beneath from '../assets/Beneath.mp3';
import LetGo from '../assets/LetGo.mp3';
import LostAt from '../assets/LostAt.mp3';
import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import burrito from '../assets/steakncheese.mp3'
import "../components/Listen.css";
import Logos from '../components/logosContainer';

const Listen = () => {
  const [selectedSong, setSelectedSong] = useState(Beneath);

  const handleSongSelect = (songUrl) => {
    console.log("Selected Song URL:", songUrl);
    setSelectedSong(songUrl);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <NavBar />
      
      <Visualizer selectedSong={selectedSong} />
     
      <Container className="songList">
        <h1> Select a song and then click on the visualizer to play/pause. Spacebar changes the colors.</h1>
        <div className="button-container">
          <button className="button-30" onClick={() => handleSongSelect(Beneath)}>Beneath the Sky</button>
          <button className="button-30" onClick={() => handleSongSelect(LostAt)}>Lost At Sea</button>
          <button className="button-30" onClick={() => handleSongSelect(LetGo)}>Let Go River</button>
          <button className="button-30" onClick={() => handleSongSelect(burrito)}>Steak & Cheese Burrito</button>
        </div>
      </Container>

      <Container className="links4mus">
      <h1>Listen on{' '}
                <a href="https://open.spotify.com/artist/7gC4lYhr9C1bgquEBPQmil?si=yJXmwH1fRNmJNexJEdsM5w&nd=1" >
                Spotify
                </a>
                ,{' '}
                <a href="https://music.apple.com/us/artist/strange-medicine/1201196360" >
                Apple Music
                </a>
                ,{' '}
                <a href="https://www.youtube.com/channel/UCSn7NCylr3KPRfJuXA0I9VA" >
                Youtube
                </a>
                , or{' '}
                <a href="https://strangemedicineofficial.bandcamp.com/album/strange-medicine" >
                Bandcamp
                </a>
                !</h1>
        <div className="iframes-container">
            <div class="ifamediv">
          <iframe title="spotify" style={{ borderRadius: '12px', marginRight: '15px' }} src="https://open.spotify.com/embed/artist/7gC4lYhr9C1bgquEBPQmil?utm_source=generator&theme=0" width="300" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div class="ifamediv">
          <iframe title="bandcamp" style={{ border: '0', width: '100%', height: '120px' }} src="https://bandcamp.com/EmbeddedPlayer/album=452909258/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://strangemedicineofficial.bandcamp.com/album/strange-medicine">Strange Medicine by Strange Medicine</a></iframe>
          </div>
        </div>
      </Container>

      <Logos />
      
      <Container className ="footer">
        <hr />
        <p><a href="/contact">CONTACT US!</a></p>
        <p>Developed by Rohan <a href="https://rohankeenoy.github.io/">https://rohankeenoy.github.io/</a></p>
      </Container>
    </div>
  );
};

export default Listen;
