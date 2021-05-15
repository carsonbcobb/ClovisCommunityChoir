import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.styles.scss';
import testimonialOne from '../../assets/home/gerald.png';
import testimonialTwo from '../../assets/home/jessica.png';
import testimonialThree from '../../assets/home/tom.png';
import testimonialFour from '../../assets/home/matthew.png';
import testimonialFive from '../../assets/home/jennifer.png';
import testimonialSix from '../../assets/home/albert.png';

export default class SimpleSlider extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: false,
			speed: 500,

			slidesToShow: 3,
			slidesToScroll: 3,
			pauseOnHover: true,
			cssEase: 'linear',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
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
							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialOne} />
								<h4 className='slide--name'>Gerald M</h4>
								<p className='slide--text'>
									“Ed is a wonderful director who makes singing fun! We are
									students, professionals, and retirees coming together to make
									music for a few hours and to remember why we love to sing.”
								</p>
							</div>

							<div className='slider__container--slide center'>
								<img className='slide--image' src={testimonialTwo} />
								<h4 className='slide--name'>Jessica G</h4>
								<p className='slide--text'>
									“I've seen The Clovis Community Choir perform several times
									and always really enjoy your lively and colourful concerts.
									Great songs, harmonies and everyone always looks like they are
									having so much fun!”
								</p>
							</div>

							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialThree} />
								<h4 className='slide--name'>Tom F</h4>
								<p className='slide--text'>
									“I have really enjoyed singing with this group over the past
									year. A great group of people who share my love of music!”
								</p>
							</div>
							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialFour} />
								<h4 className='slide--name'>Matthew A</h4>
								<p className='slide--text'>
									“It’s lots of fun! No pressure involved meaning no Auditions”
								</p>
							</div>

							<div className='slider__container--slide center'>
								<img className='slide--image' src={testimonialFive} />
								<h4 className='slide--name'>Jennifer K</h4>
								<p className='slide--text'>
									“I love this choir. It is fair and professional. The songs and
									director are both great. I would not change a thing...It is
									life changing...”
								</p>
							</div>

							<div className='slider__container--slide shrink'>
								<img className='slide--image' src={testimonialSix} />
								<h4 className='slide--name'>Albert C</h4>
								<p className='slide--text'>
									“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Tincidunt malesuada nisl quis tortor imperdiet. Nulla varius
									fames nullam facilisi”
								</p>
							</div>
						</Slider>
					</div>
				</div>
			</section>
		);
	}
}
