import {React,useState} from 'react'

import { BiMessageAltX,BiMessageAltError,BiQuestionMark } from 'react-icons/bi';

import MenuButtonsS from "../../styles/componentsStyles/MenuButtons/MenuButtons.module.css"
import { PrguntasF } from '../Footer/PartsFooter/TerminosCondiciones/PrguntasF';

export const MenuButtons = () => {
	const [Activate,setActivate] = useState()

	return (
		<div className={MenuButtonsS.MenuButtonsConatiner}>
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
        </div>
	);
}