import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container paddings">
				<div className="fLeft">
					<img src="./logo2.png" alt="" width={120} />
					<span className="secondaryText">
						Our vision is to make all people <br /> the best place to live for
						them.
					</span>
				</div>
				<div className="fRight">
					<h2 className="primaryText">Information</h2>
					<p className="secondaryText">145 New York, FL 5467, USA</p>
					<div className="fMenu">
						<a href="">Property</a>
						<a href="">Services</a>
						<a href="">Product</a>
						<a href="">About Us</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
