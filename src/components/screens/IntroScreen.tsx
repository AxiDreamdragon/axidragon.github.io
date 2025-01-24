import ImageSlide from "../ImageSlide/ImageSlide";

import background from '@/assets/nature/texel-sky.webp';
import axi from '@/assets/axi.png';

import styles from './IntroScreen.module.css';

function IntroScreen() {
	return (
		<ImageSlide imageSource={background}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p>Hi! I'm axi*! The asterisk doesn't actually mean anything.
						It was based on 'GOLF le FLEUR*' - I thought the asterisk looked neat, so I stole it for myself.</p>
					<p>A couple years ago, I started out as a Game Artist
						at the University of Arts Utrecht.</p>
					<p>Since then, I've gotten in touch with coding in programs such as Processing and Unity,
						but also various aspects of software and web development.</p>
					<p>Now, I love making a variety of programs to make life just a little better.</p>
					<p>Aside from programming, I also enjoy drawing cute critters, pretending to be a
						cartoon dragon online, taking forest walks and
						trying plenty of new things. I've also been trying my hand at cooking recently!</p>
				</div>
				<img src={axi} alt="Axi" className={styles.axiImage} />
			</div>
		</ImageSlide >
	);
}

export default IntroScreen;