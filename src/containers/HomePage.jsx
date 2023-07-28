import React from 'react';
import NavBar from '../components/NavBar';
import '../components/SMstyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Container, Card } from 'react-bootstrap';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import rohan from '../assets/rohan.png'
import graham from '../assets/graham.jpg'
import austin from '../assets/austin.jpg'
import bao from '../assets/bao.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logos from '../components/logosContainer'



const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="content-container">
        <Carousel controls={false}>
          <Carousel.Item interval={4000}>
            <img
              className="d-block mx-auto image-resize"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block mx-auto image-resize"
              src={image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block mx-auto image-resize"
              src={image3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="logos">
      <Logos/>

        
      </Container>
      <Container className="pageSec">
        <p>
          Deep within the heart of the Mississippi River, where catfish serenade with banjos and blues legends haunt the night, a cosmic collision of musical prowess occurred. Behold, the birth of Strange Medicine! These four misfit minstrels hailing from the land of cornfields and cow-tippin' were destined to ignite the Midwest with a storm of sonic shenanigans. With thunderous riffs, electrifying solos, and a dash of St. Louis charm, Strange Medicine burst onto the scene like a sonic tornado, leaving a trail of shattered eardrums and satisfied smiles in their wake.
         
        </p>
      </Container>
          <Container className="card-container">
            <Card>
              <Card.Img variant="top" src={austin} />
              <Card.Body>
                <Card.Title>Austin</Card.Title>
                <Card.Text>
                Austin, the vocal powerhouse with a voice that could make angels weep and caterwauling alley cats purr with envy, was discovered in a St. Louis karaoke contest. He won by unleashing a falsetto so divine that it caused the judges' wigs to fly off and birds to start harmonizing in perfect unison. His charismatic swagger and wild antics have been known to make even the grumpiest grandmas break into spontaneous air guitar solos.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={bao} />
              <Card.Body>
                <Card.Title>Bao</Card.Title>
                <Card.Text>
                Bao, the rhythmic tornado behind the drum kit, learned his percussive skills by secretly drumming on his mother's pots and pans during dinner time. His beats are so thunderous that they can shake loose the fillings from your molars, and his drum fills are more mind-bending than a Rubik's Cube on acid. Rumor has it that he once tamed a wild buffalo by challenging it to a drum battle and emerging victorious.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={graham}/>
              <Card.Body>
                <Card.Title>Graham</Card.Title>
                <Card.Text>
                Graham, the funky maestro of the bass guitar, brings the grooves that can make even the most stoic statues break out into a boogie. With a repertoire of bass lines that could make Bootsy Collins green with envy, Graham's fingers glide across the strings like a caffeinated spider monkey. He's been known to funkify the most mundane situations, turning grocery shopping into an impromptu dance party and the DMV into a slap bass extravaganza.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={rohan} />
              <Card.Body>
                <Card.Title>Rohan</Card.Title>
                <Card.Text>
                Rohan, the guitar virtuoso with fingers faster than a greased lightning bolt, hails from a long line of axe-wielding wizards. Legend has it that his guitar strings are made from the unraveled hairs of a mystical centaur, granting him supernatural riffing abilities. His lightning-fast solos can melt faces faster than a popsicle in a sauna, and his stage presence is so enchanting that even the squirrels stop their nut gathering to watch in awe.
                </Card.Text>
              </Card.Body>
            </Card>
        </Container>
        <Container className ="pageSec">
          <p>
          Strange Medicine is a prescription for laughter, toe-tapping, and spontaneous outbreaks of interpretive dance. Their shows are an infectious blend of rock 'n' roll chaos and Midwestern charm, guaranteed to leave you with aching eardrums, sore feet from all the dancing, and a smile so wide it could swallow the Mississippi River itself. So buckle up, grab your socks, and prepare to be rocked into a state of blissful musical mayhem!
          </p>
        </Container>
        <Container className ="footer">
        <hr />
        <p><a href="/contact">CONTACT US!</a></p>
        <p>Developed by Rohan <a href="https://rohankeenoy.github.io/">https://rohankeenoy.github.io/</a></p>
      </Container>
    </div>
  );
};

export default HomePage;
