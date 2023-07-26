import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const LogosContainer = () => {
  const linkStyle = {
    color: 'black', // Set the desired color for the links
    textDecoration: 'none', // Remove any text decoration (underline)
    margin:'15px',
    textAlign: 'center',
  };
  

  return (
    <Container className="logos" style={{ display: 'inline-block', textAlign: 'center'}}>
      <a href="https://open.spotify.com/artist/7gC4lYhr9C1bgquEBPQmil?si=yJXmwH1fRNmJNexJEdsM5w" style={linkStyle} title="Spotify">
        <FontAwesomeIcon icon={['fab', 'spotify']} beatFade size="5x" />
      </a>
      <a href="https://www.instagram.com/strangemedicineofficial/" style={linkStyle} title="Instagram">
        <FontAwesomeIcon icon={['fab', 'instagram']} beatFade size="5x" />
      </a>
      <a href="https://www.facebook.com/StrangeMedicineOfficial" style={linkStyle} title="Facebook">
        <FontAwesomeIcon icon={['fab', 'facebook']} beatFade size="5x" />
      </a>
      <a href="https://strangemedicineofficial.bandcamp.com/album/strange-medicine" style={linkStyle} title="Bandcamp">
        <FontAwesomeIcon icon={['fab', 'bandcamp']} beatFade size="5x" />
      </a>
      <a href="https://music.apple.com/us/artist/strange-medicine/1201196360" style={linkStyle} title="Apple">
        <FontAwesomeIcon icon={['fab', 'apple']} beatFade size="5x" />
      </a>
    </Container>
  );
};

export default LogosContainer;
