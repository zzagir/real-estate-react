import React, { useState } from 'react'
import './Value.css'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

const Value = () => {
	return (
		<div className="value">
			<div className="container flexCenter">
				<div className="vLeft">
					<div className="imageContainer">
						<img src="./value.png" alt="value" />
					</div>
				</div>
				<div className="vRight">
					<span className="orangeText">Our Value</span>
					<h4 className="primaryText">Value We Give to You</h4>
					<p className="secondaryText">
						We always ready to help by providijng the best services for you.
						<br /> We beleive a good blace to live can make your life better
					</p>
					<Accordion
						className="accordion"
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, i) => {
							const [className, setClassName] = useState('')
							return (
								<AccordionItem
									className={`accordionItem ${className}`}
									key={i}
									uuid={i}
								>
									<AccordionItemHeading>
										<AccordionItemButton className="accordionButton flexCenter">
											<AccordionItemState>
												{({ expanded }) =>
													expanded
														? setClassName('expanded')
														: setClassName('collapsed')
												}
											</AccordionItemState>

											<div className="flexCenter icon">{item.icon}</div>
											<span className="primaryText">{item.heading}</span>
											<div>
												<MdOutlineArrowDropDown size={20} />
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<p className="secondaryText">{item.detail}</p>
									</AccordionItemPanel>
								</AccordionItem>
							)
						})}
					</Accordion>
				</div>
			</div>
		</div>
	)
}

export default Value
