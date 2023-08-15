import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="left">
					<div className="title">
						<div className="orange-circle"></div>
						<motion.h1
							initial={{ y: '2rem', opacity: 0 }}
							animate={{ y: '0', opacity: 1 }}
							transition={{ duration: 2, type: 'spring', delay: 0.5 }}
						>
							Discover <br /> Most Suitable <br /> Property
						</motion.h1>
					</div>
					<motion.div
						className="description"
						initial={{ y: '2rem', opacity: 0 }}
						animate={{ y: '0', opacity: 1 }}
						transition={{ duration: 2, type: 'spring', delay: 1 }}
					>
						<span>Find a variety of properties that suit you very easilty</span>
						<span>Forget all difficulties in finding a residence for you</span>
					</motion.div>
					<motion.div
						className="input"
						initial={{ y: '2rem', opacity: 0 }}
						animate={{ y: '0', opacity: 1 }}
						transition={{ duration: 2, type: 'spring', delay: 1.5 }}
					>
						<HiLocationMarker color="var(--blue)" size={25} />
						<input type="text" placeholder="Type here" />
						<button>Search</button>
					</motion.div>
					<motion.div
						className="stats"
						initial={{ y: '2rem', opacity: 0 }}
						animate={{ y: '0', opacity: 1 }}
						transition={{ duration: 2, type: 'spring', delay: 2 }}
					>
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
					</motion.div>
				</div>
				<motion.div
					className="right imageContainer"
					initial={{ x: '7rem', opacity: 0 }}
					animate={{ x: '0', opacity: 1 }}
					transition={{ duration: 2, type: 'spring' }}
				>
					<img src="./hero-image.png" alt="house" width={464} />
				</motion.div>
			</div>
		</div>
	)
}
export default Hero
