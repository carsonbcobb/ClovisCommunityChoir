import React, { Component } from 'react';
import Slider from 'react-slick';
import { CloudinaryContext, Image } from 'cloudinary-react';
import './event-slider.styles.scss';

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
			<CloudinaryContext cloudName='dymy6bsv9'>
				<section id='slider'>
					<div className='slider'>
						<div className='slider__container'>
							<Slider {...settings}>
								<div className='container'>
									<Image
										publicId='perf-1_vqsobd'
										format='jpg'
										className='perf-img'
									/>
									<h2>Pop Goes The Choir!</h2>
									<p>April 26, 2021</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-2_fihzua'
										format='jpg'
										className='perf-img'
									/>
									<h2>Songs of the Season</h2>
									<p>December 15, 2019</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-3_w9a10d'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Sacred Songs</h2>
									<p>October 27, 2019</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-4_cjjhei'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>6th Annual Patriotic Concert</h2>
									<p>June 28, 2019</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-5_ihatja'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Show Stoppers!</h2>
									<p>May 5, 2019</p>
									<p>Clovis Veterans Memorial Auditorium</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-6_ij0kfg'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Songs of the Season</h2>
									<p>December 16, 2018</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-7_ragmo8'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Sacred Songs</h2>
									<p>October 21, 2018</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-8_c6okam'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>5th Annual Patriotic Concert</h2>
									<p>June 29, 2018</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-9_ejxfbd'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Are We There Yet?</h2>
									<p>May 6, 2018</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-10_lo964o'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Songs of the Season</h2>
									<p>December 27, 2017</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-11_jc3iyg'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Sacred Songs</h2>
									<p>October 22, 2017</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-12_g7hh8i'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Patriotic and Gospel Favorites</h2>
									<p>June 23, 2017</p>
									<p>Peoples Church</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-13_x24dby'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Pure Imagination: From Broadway to Hollywood</h2>
									<p>May 7, 2017</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-14_lcpx9a'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Holiday Performance</h2>
									<p>December 18, 2016</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-15_a7zkkq'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>More Psalms, Hymns, and Spiritual Songs</h2>
									<p>November 3, 2016</p>
									<p>Paul Shaghoian Concert Hall</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-16_koqsqu'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Patriotic Concert</h2>
									<p>June 24, 2016</p>
									<p>G.L. Johnson Chapel</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-17_u3fusq'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>America Sings!</h2>
									<p>May 6, 2016</p>
									<p>G.L. Johnson Chapel</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-18_uptucj'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Songs of the Season</h2>
									<p>December 18, 2015</p>
									<p>G.L. Johnson Chapel</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-19_cvrq8c'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Psalms, Hymns, and Spiritual Songs</h2>
									<p>October 30, 2015</p>
									<p>G.L. Johnson Chapel</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-20_oczx9r'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Patriotic Celebration</h2>
									<p>June 25, 2015</p>
									<p>G.L. Johnson Chapel</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-21_x0cmhw'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Sing a Song of Christmas</h2>
									<p>December 18, 2014</p>
									<p>Mercedes Edwards Theater</p>
								</div>

								<div className='container'>
									<Image
										publicId='perf-22_albdhm'
										format='jpg'
										className='perf-img'
									/>{' '}
									<h2>Clovis Community Choir: In Concert!</h2>
									<p>October 30, 2014</p>
									<p>Clovis Veterans Memorial Auditorium</p>
								</div>
							</Slider>
						</div>
					</div>
				</section>
			</CloudinaryContext>
		);
	}
}
