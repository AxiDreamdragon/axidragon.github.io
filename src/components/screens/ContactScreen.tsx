import styles from './ContactScreen.module.scss';
import LogoLink from "../LogoLink/LogoLink";

const ContactScreen = () => {
	return (
		<div className={styles.wrapper} id='contact'>
			<div className={styles.container}>
				<p>Interested in chatting with me / working with me / hiring me?</p>
				<p>Send me an email at:</p>
				<p>axi |at| axidreamdragon |dot| com</p>
				<div className={styles.linkContainer}>
					<LogoLink logoName={'github'} link='https://github.com/AxiDreamdragon' />
					<LogoLink logoName={'itch'} link='https://axidreamdragon.itch.io/' />
				</div>
			</div>
		</div>
	);
}

export default ContactScreen;