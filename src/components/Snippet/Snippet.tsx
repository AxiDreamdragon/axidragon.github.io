import { useEffect, useRef, useState } from 'react';
import styles from './Snippet.module.scss';
import { ProjectData } from "@/hooks/projects";

export const rotationVariation = 15;

type Props = {
	project: ProjectData;
}

function Snippet({ project }: Props) {
	const [show, setShow] = useState<boolean>(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const titleRotation = useRef<number>(Math.random() * rotationVariation - rotationVariation / 2);

	const onClick = () => {
		setShow(false);
		window.dispatchEvent(new CustomEvent('minorProjectPressed', { detail: project }));
	};

	const handleMinorProjectPressed = () => {
		videoRef.current?.pause();
	};

	const handleMinorProjectClosed = () => {
		setShow(true);
		videoRef.current?.play();
	};

	useEffect(() => {
		window.addEventListener('minorProjectPressed', handleMinorProjectPressed);
		window.addEventListener('minorProjectClosed', handleMinorProjectClosed);

		return () => {
			window.removeEventListener('minorProjectPressed', handleMinorProjectPressed);
			window.removeEventListener('minorProjectClosed', handleMinorProjectClosed);
		}
	}, []);

	return (
		<div className={styles.Snippet} onClick={onClick} style={{
			pointerEvents: show ? 'auto' : 'none',
			translate: show ? '0' : '-100dvw 0',
		}}>
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
			<div className={styles.info}>
				<h2 className={styles.title} style={{ transform: `rotate(${titleRotation.current}deg)` }}>{project.name}</h2>
			</div>
			<sub className={styles.year}>{project.year}</sub>
		</div>
	);
}

export default Snippet;