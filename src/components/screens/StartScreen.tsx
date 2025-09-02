import ImageSlide from "@components/ImageSlide/ImageSlide";

import intro from "@/assets/videos/intro.mp4";
import axiInverted from "@/assets/axi-text.png";

import styles from './StartScreen.module.scss';

const StartScreen = () => {
	return (
		<ImageSlide imageSource={''} id="start-screen">
			<div className={styles.videoContainer}>
				<video
					className={styles.video}
					autoPlay
					loop
					muted
					playsInline
					src={intro}
				/>
			</div>
			<div className={styles.textContainer}>
				<img src={axiInverted} className={styles.title} alt='AXI' />
			</div>
		</ImageSlide>
	);
};

export default StartScreen;