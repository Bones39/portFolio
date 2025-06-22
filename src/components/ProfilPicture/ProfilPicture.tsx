import profilPicture from '../../assets/Photo_profil_andraina.png';
import styles from './ProfilPicture.module.css';

const ProfilPicture = () => {
	return <img className={styles.profilPicture} src={profilPicture} alt="Profil picture" />
}
export default ProfilPicture;