import texelSky from "@/assets/nature/texel-sky.webp";
import styles from './Snippet.module.css';

function Snippet() {
	return (
		<div className={styles.SnippetContainer}>
			<div className={styles.Snippet}>
				<div className={styles.MediaWrapper}>
					<img src={texelSky} alt='Texel Sky' />
				</div>
				<h1>Title</h1>
			</div>
		</div>
	);
}

export default Snippet;