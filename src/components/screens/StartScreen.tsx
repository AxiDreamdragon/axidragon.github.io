import ImageSlide from "@components/ImageSlide/ImageSlide";

import intro from "@/assets/videos/intro.mp4";
import axiInverted from "@/assets/text/axi.png";
import { onFireFox } from "@/utility/userInfo";

import styles from './StartScreen.module.css';

const StartScreen = () => {
	return (
		<ImageSlide imageSource={''}>
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
			{onFireFox() &&
				<div className={styles.firefoxWarning}>
					<div className={styles.firefoxWarningText}>
						<p>This site works best on Google Chrome!</p>
					</div>
				</div>}
		</ImageSlide>
	);
};

export default StartScreen;