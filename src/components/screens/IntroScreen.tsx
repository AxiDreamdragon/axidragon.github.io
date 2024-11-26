import ImageSlide from "../ImageSlide/ImageSlide";

import background from '@/assets/nature/texelSky.webp';
import axi from '@/assets/axi.png';

import styles from './IntroScreen.module.css';

function IntroScreen() {
	return (
		<ImageSlide imageSource={background}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p>A couple years ago, I started out as a Game Artist
						on the University of Arts Utrecht.</p>
					<p>Since then, I got in touch with coding in Processing, Unity,
						and also various aspects of software and web development.</p>
					<p>Now, I love making a variety of programs to make life just a little better.
						Even if the time it takes me to make the program is far more than
						the time it'll actually save me, of course.</p>
					<p>I also enjoy drawing cute critters, taking forest walks and
						trying plenty of new things.</p>
				</div>
				<img src={axi} alt="Axi" className={styles.axiImage} />
			</div>
		</ImageSlide >
	);
}

export default IntroScreen;