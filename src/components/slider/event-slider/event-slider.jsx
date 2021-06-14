import React, { Component } from 'react';
import Slider from 'react-slick';
import './event-slider.styles.scss';

import Slide1 from '../../../assets/events/perf-1.jpeg';
import Slide2 from '../../../assets/events/perf-2.jpeg';
import Slide3 from '../../../assets/events/perf-3.jpeg';
import Slide4 from '../../../assets/events/perf-4.jpeg';
import Slide5 from '../../../assets/events/perf-5.jpeg';
import Slide6 from '../../../assets/events/perf-6.jpeg';
import Slide7 from '../../../assets/events/perf-7.jpeg';
import Slide8 from '../../../assets/events/perf-8.jpeg';
import Slide9 from '../../../assets/events/perf-9.jpeg';
import Slide10 from '../../../assets/events/perf-10.jpeg';
import Slide11 from '../../../assets/events/perf-11.jpeg';
import Slide12 from '../../../assets/events/perf-12.jpeg';
import Slide13 from '../../../assets/events/perf-13.jpeg';
import Slide14 from '../../../assets/events/perf-14.jpeg';
import Slide15 from '../../../assets/events/perf-15.jpeg';
import Slide16 from '../../../assets/events/perf-16.jpeg';
import Slide17 from '../../../assets/events/perf-17.jpeg';
import Slide18 from '../../../assets/events/perf-18.jpeg';
import Slide19 from '../../../assets/events/perf-19.jpeg';
import Slide20 from '../../../assets/events/perf-20.jpeg';
import Slide21 from '../../../assets/events/perf-21.jpeg';
import Slide22 from '../../../assets/events/perf-22.jpeg';

import prev from '../../../assets/events/prev.png';
import next from '../../../assets/events/next.png';

export default class EventSlider extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			autoplay: false,
			speed: 500,
			nextArrow: <img src={next} className='next-arrow arrow' />,
			prevArrow: <img src={prev} className='prev-arrow arrow' />,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: true,
			cssEase: 'linear',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<section id='slider'>
				<div className='slider'>
					<div className='slider__container'>
						<Slider {...settings}>
							<div className='container'>
								<img src={Slide1} className='perf-img' />
								<h2>Pop Goes The Choir!</h2>
								<p>April 26, 2021</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide2} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 15, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide3} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 27, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide4} className='perf-img' />
								<h2>6th Annual Patriotic Concert</h2>
								<p>June 28, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide5} className='perf-img' />
								<h2>Show Stoppers!</h2>
								<p>May 5, 2019</p>
								<p>Clovis Veterans Memorial Auditorium</p>
							</div>

							<div className='container'>
								<img src={Slide6} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 16, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide7} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 21, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide8} className='perf-img' />
								<h2>5th Annual Patriotic Concert</h2>
								<p>June 29, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide9} className='perf-img' />
								<h2>Are We There Yet?</h2>
								<p>May 6, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide10} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 27, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide11} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 22, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide12} className='perf-img' />
								<h2>Patriotic and Gospel Favorites</h2>
								<p>June 23, 2017</p>
								<p>Peoples Church</p>
							</div>

							<div className='container'>
								<img src={Slide13} className='perf-img' />
								<h2>Pure Imagination: From Broadway to Hollywood</h2>
								<p>May 7, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide14} className='perf-img' />
								<h2>Holiday Performance</h2>
								<p>December 18, 2016</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide15} className='perf-img' />
								<h2>More Psalms, Hymns, and Spiritual Songs</h2>
								<p>November 3, 2016</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={Slide16} className='perf-img' />
								<h2>Patriotic Concert</h2>
								<p>June 24, 2016</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={Slide17} className='perf-img' />
								<h2>America Sings!</h2>
								<p>May 6, 2016</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={Slide18} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 18, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={Slide19} className='perf-img' />
								<h2>Psalms, Hymns, and Spiritual Songs</h2>
								<p>October 30, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={Slide20} className='perf-img' />
								<h2>Patriotic Celebration</h2>
								<p>June 25, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={Slide21} className='perf-img' />
								<h2>Sing a Song of Christmas</h2>
								<p>December 18, 2014</p>
								<p>Mercedes Edwards Theater</p>
							</div>

							<div className='container'>
								<img src={Slide22} className='perf-img' />
								<h2>Clovis Community Choir: In Concert!</h2>
								<p>October 30, 2014</p>
								<p>Clovis Veterans Memorial Auditorium</p>
							</div>
						</Slider>
					</div>
				</div>
			</section>
		);
	}
}
