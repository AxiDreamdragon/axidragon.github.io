import { useEffect, useRef } from 'react';
import styles from './Snippet.module.scss';
import { ProjectData } from "@/hooks/projects";

export const rotationVariation = 5;

type Props = {
	project: ProjectData;
}

function Snippet({ project }: Props) {
	const videoRef = useRef<HTMLVideoElement>(null);

	const onClick = () => {
		window.dispatchEvent(new CustomEvent('minorProjectPressed', { detail: project }));
	};

	const handleMinorProjectPressed = () => {
		if (videoRef.current) {
			//TODO: for fun, instead of pausing, slowly lower the playback rate to 0
			videoRef.current.pause();
		}
	};

	const handleMinorProjectClosed = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	useEffect(() => {
		if (!videoRef.current) {
			return;
		}

		window.addEventListener('minorProjectPressed', handleMinorProjectPressed);
		window.addEventListener('minorProjectClosed', handleMinorProjectClosed);


		return () => {
			window.removeEventListener('minorProjectPressed', handleMinorProjectPressed);
			window.removeEventListener('minorProjectClosed', handleMinorProjectClosed);
		}
	}, []);

	return (
		<div className={styles.Snippet} onClick={onClick}>
			<div className={styles.cover}>
				{
					project.cover.type === 'image' ?
						<img src={project.cover.src} alt={project.name} /> :
						<video autoPlay muted loop ref={videoRef}>
							<source src={project.cover.src} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
				}
			</div>
			<div>
				<h2>{project.name}</h2>
				<sub>{project.year}</sub>
			</div>
		</div>
	);
}

export default Snippet;