import YouTube from 'react-youtube';

import logo from './assets/nav-logo.png';
import facebook from './assets/facebook.png';
import youtube from './assets/youtube.png';
import aboutImage from './assets/about.png';
import quoteStart from './assets/quote-start.png';
import quoteEnd from './assets/quote-end.png';
import testimonialOne from './assets/gerald.png';
import testimonialTwo from './assets/jessica.png';
import testimonialThree from './assets/tom.png';

import './App.css';

function App() {
	return (
		<div class='body'>
			<nav id='nav'>
				<div class='nav__logo'>
					<img src={logo} />
				</div>
				<div class='nav__links'>
					<a href='#' class='nav__links--link'>
						Home
					</a>
					<a href='#' class='nav__links--link'>
						About
					</a>
					<a href='#' class='nav__links--link'>
						Events
					</a>
					<a href='#' class='nav__links--link'>
						Contact
					</a>
				</div>
			</nav>

			<section id='hero'>
				<div class='hero'>
					<div class='hero__text'>
						<h1 class='hero__text--title'>
							Clovis <br /> <span class='darkblue'> Community Choir </span>
						</h1>
					</div>

					<div class='hero__text--body'>
						<p>
							The Clovis Community Choir is here to provide an opportunity for
							singers of all experience levels an encouraging and welcoming
							environment in which to sing a variety of quality choral music.We
							also strive to present enriching and inspiring concerts for all
							ages in the great Clovis / Fresno community
						</p>
					</div>

					<div class='hero__text--button'>
						<a class='button' href='#'>
							Join Now
						</a>
					</div>
				</div>
			</section>

			<section id='about'>
				<div className='about'>
					<h2 className='about__title'>About</h2>

					<div className='about__content'>
						<div className='about__content--image'>
							<img src={aboutImage} />
						</div>

						<div className='about__content--text'>
							<h3 className='text--title'>
								<span className='blue'>A love of singing</span>
								<br />
								balanced with a love of community
							</h3>
							<p>
								A membership of 90 plus voices, diverse experience levels and
								one love for music and the community. Clovis Community Choir, is
								a non-auditioned choral group established in 2014 in Clovis
								California. Our singers range from those who are highly skilled
								to those who have never sung in a choir before, but we all have
								these things in common:
							</p>
							<a href='#' className='button' />
						</div>
					</div>
				</div>
			</section>

			<section id='connect'>
				<div className='connect'>
					<p className='connect--subtitle'>Connect With</p>
					<h2 className='connect--title'>Connect With Us</h2>

					<div className='connect__content'>
						<div className='connect__content--video'>
							<YouTube videoId='Cf_dXxRe7E0' />
						</div>

						<div className='connect__content--text'>
							<h3>
								Watch our Virtual Choir
								<br />
								Performance!
							</h3>
							<div className='connect-social'>
								<img src={facebook} />
								<img src={youtube} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='join'>
				<div className='join'>
					<p className='join--subhead'>Come join the</p>
					<h3 className='join--head'>Come Join the Family</h3>

					<div className='join__text'>
						<img src={quoteStart} />
						<p>
							Join over 90 others who’ve discovered the joy of
							<br />
							singing together!
						</p>
						<img src={quoteEnd} />
					</div>
				</div>
			</section>

			<section id='slider'>
				<div className='slider'>
					<div className='slider__container'>
						<div className='slider__container--slide'>
							<img className='slide--image' src={testimonialOne} />
							<h4 className='slide--name'>Gerald M</h4>
							<p className='slide--text'>
								“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Tincidunt malesuada nisl quis tortor imperdiet. Nulla varius
								fames nullam facilisi”
							</p>
						</div>

						<div className='slider__container--slide'>
							<img className='slide--image' src={testimonialTwo} />
							<h4 className='slide--name'>Jessica G</h4>
							<p className='slide--text'>
								“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Tincidunt malesuada nisl quis tortor imperdiet. Nulla varius
								fames nullam facilisi”
							</p>
						</div>

						<div className='slider__container--slide'>
							<img className='slide--image' src={testimonialThree} />
							<h4 className='slide--name'>Tom F</h4>
							<p className='slide--text'>
								“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Tincidunt malesuada nisl quis tortor imperdiet. Nulla varius
								fames nullam facilisi”
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='footer'>
				<div className='footer'>
					<img src={logo} />
					<p>1452 David E. Cook Way Clovis, CA 93611</p>
					<p>Cloviscommunitychoir@gmail.com</p>
					<p>559-327-2800</p>

					<div className='footer__social'>
						<img src={facebook} />
						<img src={youtube} />
					</div>

					<a href='#' className='copyright'>
						Carson Cobb &#169; 2021
					</a>
				</div>
			</section>
		</div>
	);
}

export default App;
