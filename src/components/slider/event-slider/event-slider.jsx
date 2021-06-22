import React, { Component } from 'react';
import Slider from 'react-slick';
import './event-slider.styles.scss';

import slide1 from '../../../assets/events/perf-1.jpeg';
import slide2 from '../../../assets/events/perf-2.jpeg';
import slide3 from '../../../assets/events/perf-3.jpeg';
import slide4 from '../../../assets/events/perf-4.jpeg';
import slide5 from '../../../assets/events/perf-5.jpeg';
import slide6 from '../../../assets/events/perf-6.jpeg';
import slide7 from '../../../assets/events/perf-7.jpeg';
import slide8 from '../../../assets/events/perf-8.jpeg';
import slide9 from '../../../assets/events/perf-9.jpeg';
import slide10 from '../../../assets/events/perf-10.jpeg';
import slide11 from '../../../assets/events/perf-11.jpeg';
import slide12 from '../../../assets/events/perf-12.jpeg';
import slide13 from '../../../assets/events/perf-13.jpeg';
import slide14 from '../../../assets/events/perf-14.jpeg';
import slide15 from '../../../assets/events/perf-15.jpeg';
import slide16 from '../../../assets/events/perf-16.jpeg';
import slide17 from '../../../assets/events/perf-17.jpeg';
import slide18 from '../../../assets/events/perf-18.jpeg';
import slide19 from '../../../assets/events/perf-19.jpeg';
import slide20 from '../../../assets/events/perf-20.jpeg';
import slide21 from '../../../assets/events/perf-21.jpeg';
import slide22 from '../../../assets/events/perf-22.jpeg';

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
								<img src={slide1} className='perf-img' />
								<h2>Pop Goes The Choir!</h2>
								<p>April 26, 2021</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide2} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 15, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide3} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 27, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide4} className='perf-img' />
								<h2>6th Annual Patriotic Concert</h2>
								<p>June 28, 2019</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide5} className='perf-img' />
								<h2>Show Stoppers!</h2>
								<p>May 5, 2019</p>
								<p>Clovis Veterans Memorial Auditorium</p>
							</div>

							<div className='container'>
								<img src={slide6} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 16, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide7} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 21, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide8} className='perf-img' />
								<h2>5th Annual Patriotic Concert</h2>
								<p>June 29, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide9} className='perf-img' />
								<h2>Are We There Yet?</h2>
								<p>May 6, 2018</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide10} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 27, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide11} className='perf-img' />
								<h2>Sacred Songs</h2>
								<p>October 22, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide12} className='perf-img' />
								<h2>Patriotic and Gospel Favorites</h2>
								<p>June 23, 2017</p>
								<p>Peoples Church</p>
							</div>

							<div className='container'>
								<img src={slide13} className='perf-img' />
								<h2>Pure Imagination: From Broadway to Hollywood</h2>
								<p>May 7, 2017</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide14} className='perf-img' />
								<h2>Holiday Performance</h2>
								<p>December 18, 2016</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide15} className='perf-img' />
								<h2>More Psalms, Hymns, and Spiritual Songs</h2>
								<p>November 3, 2016</p>
								<p>Paul Shaghoian Concert Hall</p>
							</div>

							<div className='container'>
								<img src={slide16} className='perf-img' />
								<h2>Patriotic Concert</h2>
								<p>June 24, 2016</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={slide17} className='perf-img' />
								<h2>America Sings!</h2>
								<p>May 6, 2016</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={slide18} className='perf-img' />
								<h2>Songs of the Season</h2>
								<p>December 18, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={slide19} className='perf-img' />
								<h2>Psalms, Hymns, and Spiritual Songs</h2>
								<p>October 30, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={slide20} className='perf-img' />
								<h2>Patriotic Celebration</h2>
								<p>June 25, 2015</p>
								<p>G.L. Johnson Chapel</p>
							</div>

							<div className='container'>
								<img src={slide21} className='perf-img' />
								<h2>Sing a Song of Christmas</h2>
								<p>December 18, 2014</p>
								<p>Mercedes Edwards Theater</p>
							</div>

							<div className='container'>
								<img src={slide22} className='perf-img' />
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
