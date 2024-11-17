import ImageSlide from "@components/ImageSlide/ImageSlide";

import intro from "@/assets/videos/intro.mp4";
import axiInverted from "@/assets/text/axi.png";

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
				<img src={axiInverted} className={styles.title} />
				<p style={{ position: 'absolute', top: 0 }}>
					(this website is under construction)
				</p>
				<p style={{ position: 'absolute', bottom: 0 }}>
					I'm a software engineer and
					I like to make things
					I also do web development!
				</p>
			</div>
		</ImageSlide>
	);
};

export default StartScreen;