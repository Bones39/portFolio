import profilPicture from '../../assets/cool-profile-picture.jpg';
import styles from './ProfilPicture.module.css';

const ProfilPicture = () => {
	return <img className={styles.profilPicture} src={profilPicture} alt="Profil picture" />
}
export default ProfilPicture;