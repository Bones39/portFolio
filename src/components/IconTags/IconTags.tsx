import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IconTags.module.css";
import { faReact, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Icon, IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
	iconNames: string[];
}

const IconTags = ({iconNames}: Props) => {
	const iconMap: {[key: string] : IconDefinition} = {
		react: faReact,
		bootstrap: faBootstrap
	}
	return(
		<>
			{iconNames.map((icon) => {
				return(
				<div className={styles.iconTag}>
					<i className={styles.icon}>
						<FontAwesomeIcon icon={iconMap[icon]}/>
					</i>
					<span className={styles.iconName}>
						React
					</span>
				</div>)
			})}
		</>
	)
}

export default IconTags;