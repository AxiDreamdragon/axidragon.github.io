import ImageSlide from "../ImageSlide/ImageSlide";

import texelSky from "@/assets/nature/texel-sky.webp";

import styles from './ContactScreen.module.scss';
import LogoLink from "../LogoLink/LogoLink";

const ContactScreen = () => {
	return (
		<ImageSlide imageSource={texelSky} id='Contact' noCustomScrolling>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p>Interested in chatting with me / working with me / hiring me?</p>
					<p>Send me an email at:</p>
					<p>axi |at| axidreamdragon |dot| com</p>
					<div className={styles.linkContainer}>
						<LogoLink logoName={'github'} link='https://github.com/AxiDragon' />
						<LogoLink logoName={'itch'} link='https://axidreamdragon.itch.io/' />
					</div>
				</div>
			</div>
		</ImageSlide>
	);
}

export default ContactScreen;