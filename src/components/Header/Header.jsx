import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import OutsideClickHandler from 'react-outside-click-handler'
import { getMenuStyles } from '../../utils/common'

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false)

	return (
		<div className="header">
			<div className="container">
				<div className="logo">
					<img src="./logo.png" alt="logo" width={100} />
				</div>
				<OutsideClickHandler
					onOutsideClick={() => {
						setMenuOpened(false)
					}}
				>
					<div className="menu" style={getMenuStyles(menuOpened)}>
						<a href="#">Residencies</a>
						<a href="#">Our Value</a>
						<a href="#">Contact Us</a>
						<a href="#">Get Started</a>
						<button>
							<a href="mailto:zainkeepscode@gmail.com">Contact</a>
						</button>
					</div>
				</OutsideClickHandler>
				<div
					className="menu-icon"
					onClick={() => setMenuOpened((prev) => !prev)}
				>
					{!menuOpened ? <BiMenuAltRight size={30} /> : <GrClose size={25} />}
				</div>
			</div>
		</div>
	)
}
export default Header
