import {React,useState} from 'react'
import { motion,useDragControls } from 'framer-motion';

import { BiMessageAltX,BiMessageAltError,BiQuestionMark } from 'react-icons/bi';

import MenuButtonsS from "../../styles/componentsStyles/MenuButtons/MenuButtons.module.css"
import { PrguntasF } from '../Footer/PartsFooter/TerminosCondiciones/PrguntasF';

export const MenuButtons = () => {
	const [Activate,setActivate] = useState(false)
	const controls = useDragControls()
	return (
		<motion.div className={MenuButtonsS.MenuButtonsConatiner}
		drag
		dragListener={true}
		dragControls={controls}
		dragElastic={0}
		dragMomentum={false}
		>
			<div className={MenuButtonsS.MenuButtons} >
{/*  */}
				<i className={`${MenuButtonsS.MenuBtnAction} ${Activate ? MenuButtonsS.MenuBtnActionActivate : ""}`} onClick={() => {setActivate(!Activate)}}>
					{Activate === false ? <BiMessageAltError/> : <BiMessageAltX/>}
				</i>
{/* */}
				<div className={`${MenuButtonsS.MenuContent} ${Activate ? MenuButtonsS.MenuContentActivate : ""}`}>
						<ul className={`${MenuButtonsS.ContentContainer} ${Activate ? MenuButtonsS.ContentContainerActivate : ""}`}>
							<li className={`${MenuButtonsS.Content}  ${Activate ? MenuButtonsS.ContentActivate1 : ""}`}>
								<PrguntasF/><i className={MenuButtonsS.iconsMenuButtons}><BiQuestionMark/></i>
							</li>
							<li className={`${MenuButtonsS.Content} ${Activate ? MenuButtonsS.ContentActivate2 : ""}`}>
								Hola<i className={MenuButtonsS.iconsMenuButtons}><BiQuestionMark/></i>
							</li>
							<li className={`${MenuButtonsS.Content} ${Activate ? MenuButtonsS.ContentActivate3 : ""}`}>
								Adias<i className={MenuButtonsS.iconsMenuButtons}><BiQuestionMark/></i>
							</li>
						</ul>
				</div>
{/*  */}
			</div>
        </motion.div>
	);
}