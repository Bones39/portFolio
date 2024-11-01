import { useEffect, useState } from "react";
import DescriptionHeader from "../DecriptionHeader/DescriptionHeader";
import Description from "../Description/Despcription";

const DescriptionContainer = ()	=> {
	
	return(
		<div className="descriptionContainer">
			<DescriptionHeader></DescriptionHeader>
			<Description></Description>
		</div>
	)
}

export default DescriptionContainer;