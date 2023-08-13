import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import './Residencies.css'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import SliderButtons from './SliderButtons'

const Residencies = () => {
	return (
		<div className="residencies">
			<div className="container">
				<div className="rText">
					<span className="orangeText">Best Choices</span>
					<span className="primaryText">Popular Residencies</span>
				</div>
				<div className="rSlider">
					<Swiper {...sliderSettings}>
						<SliderButtons />
						{data.map((card, i) => (
							<SwiperSlide key={i}>
								<div className="rCard">
									<img src={card.image} alt={card.name} />
									<span>
										<span style={{ color: 'orange' }}>$</span>
										<span>{card.price}</span>
									</span>
									<h4>{card.name}</h4>
									<p className="secondaryText">{card.detail}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
export default Residencies
