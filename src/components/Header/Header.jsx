import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="logo">
					<img src="./logo.png" alt="logo" width={100} />
				</div>
				<div className="menu">
					<a href="#">Residencies</a>
					<a href="#">Our Value</a>
					<a href="#">Contact Us</a>
					<a href="#">Get Started</a>
					<button>Contact</button>
				</div>
			</div>
			<div className="menu-icon">
				<BiMenuAltRight size={30} />
			</div>
		</div>
	)
}
export default Header
