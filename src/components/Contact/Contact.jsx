import React from 'react'
import './Contact.css'
import { IoMdCall } from 'react-icons/io'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'

const Contact = () => {
	return (
		<div className="contact">
			<div className="container flexCenter">
				<div className="cLeft flexColStart">
					<div className="cText">
						<span className="orangeText">Our Contact Us</span>
						<h4 className="primaryText">Easy to contact us</h4>
						<p className="secondaryText">
							We always ready to help by providijng the best services for you.
							We beleive a good blace to live can make your life better
						</p>
					</div>
					<div className="cContacts">
						<div className="cItem flexColCenter">
							<div className="flexStart">
								<div className="flexCenter icon">
									<IoMdCall size={25} />
								</div>
								<div>
									<span className="primaryText">Call</span>
									<p className="secondaryText">021 123 543 43</p>
								</div>
							</div>
							<button>Call now</button>
						</div>
						<div className="cItem flexColCenter">
							<div className="flexStart">
								<div className="flexCenter icon">
									<BsFillChatDotsFill size={25} />
								</div>
								<div>
									<span className="primaryText">Chat</span>
									<p className="secondaryText">021 123 543 43</p>
								</div>
							</div>
							<button>Call now</button>
						</div>
						<div className="cItem flexColCenter">
							<div className="flexStart">
								<div className="flexCenter icon">
									<BsFillCameraVideoFill size={25} />
								</div>
								<div>
									<span className="primaryText">Video Call</span>
									<p className="secondaryText">021 123 543 43</p>
								</div>
							</div>
							<button>Call now</button>
						</div>
						<div className="cItem flexColCenter">
							<div className="flexStart">
								<div className="flexCenter icon">
									<TbMessageCircle2Filled size={25} className="tbIcon" />
								</div>
								<div>
									<span className="primaryText">Message</span>
									<p className="secondaryText">021 123 543 43</p>
								</div>
							</div>
							<button>Call now</button>
						</div>
					</div>
				</div>
				<div className="cRight flexColEnd">
					<div className="imageContainer">
						<img src="./contact.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Contact
