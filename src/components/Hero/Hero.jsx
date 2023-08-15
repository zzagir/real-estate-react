import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="left">
					<div className="title">
						<div className="orange-circle"></div>
						<h1>
							Discover <br /> Most Suitable <br /> Property
						</h1>
					</div>
					<div className="description">
						<span>Find a variety of properties that suit you very easilty</span>
						<span>Forget all difficulties in finding a residence for you</span>
					</div>
					<div className="input">
						<HiLocationMarker color="var(--blue)" size={25} />
						<input type="text" placeholder="Type here" />
						<button>Search</button>
					</div>
					<div className="stats">
						<div className="count">
							<span>
								<CountUp start={8800} end={9000} duration={4} />
								<span>+</span>
							</span>
							<span>Premium Product</span>
						</div>
						<div className="count">
							<span>
								<CountUp start={1800} end={2000} duration={4} />
								<span>+</span>
							</span>
							<span>Happy Customer</span>
						</div>
						<div className="count">
							<span>
								<CountUp start={10} end={28} duration={4} />
								<span>+</span>
							</span>
							<span>Awards Winning</span>
						</div>
					</div>
				</div>
				<div className="right imageContainer">
					<img src="./hero-image.png" alt="house" width={464} />
				</div>
			</div>
		</div>
	)
}
export default Hero
