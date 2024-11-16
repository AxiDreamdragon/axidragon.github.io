import ImageSlide from "@components/ImageSlide/ImageSlide";

import introVideo from "@/assets/videos/placeholderVideo.mp4";

import styles from './StartScreen.module.css';
import FadingScreen from "../FadingScreen/FadingScreen";

const StartScreen = () => {
	return (
		<ImageSlide imageSource={''}>
			{/* TODO: Fix fading screen and video Z-ordering issue
				I could also potentially just transfer the fading screen functionality
				here, by changing the opacity of the video? */}
			<div className={styles.videoContainer}>
				<video
					className={styles.video}
					autoPlay
					loop
					muted
					playsInline
					src={introVideo}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Hey! I'm Axi</h1>
				<p style={{ position: 'absolute', top: 0 }}>
					(this website is under construction)
				</p>
				<p style={{ position: 'absolute', bottom: 0 }}>
					I'm a software engineer and
					I like to make things
					I also do web development!
				</p>
			</div>
			{/* <FadingScreen color={'black'} /> */}
		</ImageSlide>
	);
};

export default StartScreen;