import React from 'react';
import BaseSpiritList from '../base_spirits/base_spirits';
import { Link } from 'react-router-dom';

class Discover extends React.Component {

  render() {
    return (
      <div className="discover-page-container">
        <div className="discover-hero">
          <div id="hero-tag">
            Let's build a cocktail, together!
            </div>
          <Link id="get-started" to="/byoc">Get Started</Link>
        </div>
        <div className="discover-featured">
          <h1>Featured Cocktails</h1>
        </div>
        <div className="discover-slideshow-wrapper">

          <div className="discover-slideshow">
            <div className="discover-slideshow-item">
              <Link to="/drinks/11003">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg" alt="Negroni" />
                <div className="discover-slideshow-title">Negroni</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/17836">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/vtpsvr1472811976.jpg" alt="Acapulco" />
                <div className="discover-slideshow-title">Acapulco</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11243">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/yyvywx1472720879.jpg" alt="Chocolate Black Russian" />
                <div className="discover-slideshow-title">Chocolate Black Russian</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11375">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/r9cz3q1504519844.jpg" alt="Foxy Lady" />
                <div className="discover-slideshow-title">Foxy Lady</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11009">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg" alt="Moscow Mule" />
                <div className="discover-slideshow-title">Moscow Mule</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/14229">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg" alt="747" />
                <div className="discover-slideshow-title">747</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/15300">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg" alt="3-Mile Long Island Iced Tea" />
                <div className="discover-slideshow-title">3-Mile Long Island Iced Tea</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/14538">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg" alt="Bumble Bee #1" />
                <div className="discover-slideshow-title">Bumble Bee #1</div>
              </Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11064">
                <img className="discover-slideshow-img" src="https://www.thecocktaildb.com/images/media/drink/k1xatq1504389300.jpg" alt="Banana Daiquiri" />
                <div className="discover-slideshow-title">Banana Daiquiri</div>
              </Link>
            </div>
          </div>

        </div>
        <div className="discover-base">
          <h1>Base Spirits</h1>
          <div className="discover-base-spiritlist">
            {/* <Link id="d-bs-whiskey" className="discover-spirit" to="">Whiskey</Link> */}
            <div className="bs-overlay">
              <Link id="d-bs-whiskey" className="discover-spirit" to="">Whiskey</Link>
            </div>
            <Link id="d-bs-vodka" className="discover-spirit" to="">Rum</Link>
            <Link id="d-bs-tequila" className="discover-spirit" to="">Vodka</Link>
            <Link id="d-bs-rum" className="discover-spirit" to="">Tequila</Link>
            <Link id="d-bs-gin" className="discover-spirit" to="">Gin</Link>
            <Link id="d-bs-brandy" className="discover-spirit" to="">Brandy</Link>
          </div>
        </div>
      </div>
    );
  }

}

export default Discover;

// TODO: Add "cocktail buddy" icon above "Get Started" link