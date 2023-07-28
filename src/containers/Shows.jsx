import React from 'react';
import Navbar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import '../components/shows.css';
import may19 from '../assets/may19Strange.jpg';
import oct18 from '../assets/oct18Strange.jpg';
import jan18 from '../assets/jan18Strange.jpg';
import dec22 from '../assets/dec22Strange.jpg';
import apr29 from '../assets/apr29Strange.jpg';
import nov19 from '../assets/nov19.jpg';
import july8 from '../assets/jul8Strange.jpg';
import logo from '../assets/SMlogo.png'
import Logos from '../components/logosContainer'
import { Link } from 'react-router-dom'; //

const Shows = () => {
  return (
    <div>
      <Navbar />
      <div className="blah">
        <h1 className="upcomingTitle">Upcoming Shows</h1>
        <hr></hr>
        <Container className="show-item">
            <h1>No Upcoming Shows</h1>
            <div className="image-container">
              <img className="flier" src={logo} alt="logo" />
            </div>
            <div className="text-container">
              <p className="details">
                Check back soon and stay up to date on our <a href="https://www.instagram.com/strangemedicineofficial/">Instagram</a> and <a href="https://www.facebook.com/StrangeMedicineOfficial">Facebook</a> 
              </p>
            </div>
          </Container>
        <hr></hr>
        <h1 className="upcomingTitle">Previous Shows</h1>
        <hr></hr>
        <Container className="previousShows">

          

          {/* Show 1 */}
          <Container className="show-item">
            <h1>July 8, 2023</h1>
            <div className="image-container">
              <img className="flier" src={july8} alt="july8" />
            </div>
            <div className="text-container">
              <p className="details">
                July  8th. Red Flag. Doors @ 7.
              </p>
            </div>
          </Container>

          {/* Show 2 */}
          <Container className="show-item">
            <h1>May 19, 2017</h1>
            <div className="image-container">
              <img className="flier" src={may19} alt="may19" />
            </div>
            <div className="text-container">
              <p className="details">
                May 19. CBGB. 8pm.
              </p>
            </div>
          </Container>

          {/* Show 3 */}
          <Container className="show-item">
            <h1>April 29, 2017</h1>
            <div className="image-container">
              <img className="flier" src={apr29} alt="apr29" />
            </div>
            <div className="text-container">
              <p className="details">
               April 29. Ciceros. 7pm.
              </p>
            </div>
          </Container>

          {/* Show 4 */}
          <Container className="show-item">
            <h1>Jan 18, 2017</h1>
            <div className="image-container">
              <img className="flier" src={jan18} alt="jan18" />
            </div>
            <div className="text-container">
              <p className="details">
                Jan 18th. Fubar. 6pm.
              </p>
            </div>
          </Container>

          {/* Show 5 */}
          <Container className="show-item">
            <h1>Dec 22, 2016</h1>
            <div className="image-container">
              <img className="flier" src={dec22} alt="dec22" />
            </div>
            <div className="text-container">
              <p className="details">
                December 22. Delmar Hall. 7pm.
              </p>
            </div>
          </Container>

          {/* Show 6 */}
          <Container className="show-item">
            <h1>November 19, 2016</h1>
            <div className="image-container">
              <img className="flier" src={nov19} alt="nov19" />
            </div>
            <div className="text-container">
              <p className="details">
                November 19th. Ciceros. 7pm.
              </p>
            </div>
          </Container>

          {/* Show 7 */}
          <Container className="show-item">
            <h1>October 18, 2016</h1>
            <div className="image-container">
              <img className="flier" src={oct18} alt="oct 18" />
            </div>
            <div className="text-container">
              <p className="details">
                October 18th. The Firebird. 6pm.
              </p>
            </div>
          </Container>
        </Container>
        <Logos/>
        <Container className ="footer">
        <hr />
        <p><Link to ="/Contact"> Contact us!</Link></p>
        <p>Developed by Rohan <a href="https://rohankeenoy.github.io/">https://rohankeenoy.github.io/</a></p>
      </Container>
      </div>
      
    </div>
  );
};

export default Shows;
