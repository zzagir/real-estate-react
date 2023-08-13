import React from 'react'
import { useSwiper } from 'swiper/react'

const SliderButtons = () => {
	const swiper = useSwiper()
	return (
		<div className="rButton">
			<button onClick={() => swiper.slidePrev()}>&lt;</button>
			<button onClick={() => swiper.slideNext()}>&gt;</button>
		</div>
	)
}
export default SliderButtons
