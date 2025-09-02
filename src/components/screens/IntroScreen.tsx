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
					<p>A couple years ago, I made the decision to apply as a Game Artist
						at the University of Arts Utrecht. I got a spot. I only realize now  how lucky I was to make it in.</p>
					<p>Funnily enough though, although I thought I <i>really</i> wanted to be a game artist, one game development lesson where I got in touch with Processing changed my life. I loved (still do, for the record!) the problem-solving aspect of coding!</p>
					<p>I stopped being a game artist, and became a game designer. I learnt C# and Unity, but also branched out to Godot, Python, Java, and what I now consider my specialty: web development!</p>
					<p>Combining this with the creative skills I've practiced and learnt over the years, I now create unique web-apps, exploring what a bunch of lines of TypeScript and HTML can accomplish.</p>
					<p>My game artist background is still here, though! In my free time (and if I'm not programming), I enjoy drawing, 3D modeling, cooking, and being a cartoon dragon online. I've also been getting a bit more into maker electronics and reading!</p>
				</div>
				<img src={axi} alt="Axi" className={styles.axiImage} />
			</div>
		</ImageSlide >
	);
}

export default IntroScreen;