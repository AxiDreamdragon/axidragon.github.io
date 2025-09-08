import ImageSlide from "../ImageSlide/ImageSlide";

import background from '@/assets/nature/texel-sky.webp';
import axi from '@/assets/axi.png';

import styles from './IntroScreen.module.scss';

function IntroScreen() {
	return (
		<ImageSlide imageSource={background} id="intro-screen">
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p>Hi! I'm axi*! (The asterisk doesn't mean anything, to be honest - but it looks neat, right?)</p>
					<p>I'm passionate about creating software which can help people! I do this by making games and interactions that let people experience moments or viewpoints that they would otherwise not have, or by developing software that facilitates tedious processes. I tend to use TypeScript and modern web frameworks, but I'm always curious to explore other technologies if they lead to new, exciting projects!</p>
					<p>This passion started a couple years ago, when I made the decision to apply as a Game Artist
						at the University of Arts Utrecht. I got a spot!</p>
					<p>Funnily enough though, although I thought I <i>really</i> wanted to be a game artist, my first game development lesson immediately changed my life. I loved (still do, for the record!) the problem-solving aspect of coding!</p>
					<p>I stopped being a game artist, and became a game designer. I learnt C# and Unity, but also branched out to Godot, Python, Java, and what I now consider my specialty: web development!</p>
					<p>My game artist background is still here, though! In my free time (and if I'm not programming), I enjoy drawing, 3D modeling, cooking, and being a cartoon dragon online. I've also been getting a bit more into maker electronics and reading!</p>
				</div>
			</div>
			<div className={styles.axiImageContainer}>
				<img src={axi} alt="Axi" className={styles.axiImage} />
			</div>
		</ImageSlide >
	);
}

export default IntroScreen;