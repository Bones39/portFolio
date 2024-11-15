import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IconTags.module.css";
import { faReact, faBootstrap, faPython, faJs, faJava } from "@fortawesome/free-brands-svg-icons";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { Icon, IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { chakra } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
	iconNames: string[];
}

const IconTags = ({iconNames}: Props) => {
	const iconMap: {[key: string] : IconDefinition} = {
		React: faReact,
		Bootstrap: faBootstrap,
		Python: faPython,
		Javascript: faJs,
		Java: faJava
		// MongoDb
		// firebase
		// matlab
		// chakraUI
		// python
	};
	const iconMapReactIcon: {[key: string] : JSX.Element} = {
		Firebase: <IoLogoFirebase/>,
		MongoDB: <SiMongodb />
		// firebase
		// matlab
		// chakraUI
		// python
	}
	return(
		<div className={styles.tagContainer}>
			{iconNames.map((icon) => {
				return(
				<div className={styles.iconTag} key={icon}>
					<i className={styles.icon}>
						{iconMap.hasOwnProperty(icon) ? <FontAwesomeIcon icon={iconMap[icon]}/> : iconMapReactIcon[icon]}
					</i>
					<span className={styles.iconName}>
						{icon}
					</span>
				</div>)
			})}
		</div>
	)
}

export default IconTags;