import texelSky from "@/assets/nature/texel-sky.webp";
import stretch from "@/assets/stretch.png";
import styles from './Snippet.module.scss';
import LogoLink from "../LogoLink/LogoLink";
import { useRef } from "react";

export const rotationVariation = 5;

function Snippet() {
	const rotationRef = useRef<number>(Math.random() * rotationVariation - rotationVariation / 2);

	return (
		<div className={styles.SnippetContainer} style={{ transform: `rotate(${rotationRef.current}deg)` }}>
			<div className={styles.Snippet}>
				<div className={styles.MediaWrapper}>
					<img src={texelSky} alt='Texel Sky' />
				</div>
				<h2>Exersite</h2>
				<div className={styles.SnippetLinks}>
					<LogoLink logoName='github' link='https://github.com' size={48} />
					<LogoLink logoName='itch' link='https://itch.io' size={48} />
				</div>
			</div>
		</div>
	);
}

export default Snippet;