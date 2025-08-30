import { useEffect, useRef, useState } from 'react';
import styles from './Snippet.module.scss';
import { ProjectData } from "@/hooks/projects";

export const rotationVariation = 5;

type Props = {
	project: ProjectData;
}

function Snippet({ project }: Props) {
	const [show, setShow] = useState<boolean>(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	const onClick = () => {
		setShow(false);
		console.log('clicked on', project.name);
		window.dispatchEvent(new CustomEvent('minorProjectPressed', { detail: project }));
	};

	const handleMinorProjectPressed = () => {
		videoRef.current?.pause();
	};

	const handleMinorProjectClosed = () => {
		console.log('this is', project.name, 'showing again');
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
			<div>
				<h2>{project.name}</h2>
				<sub>{project.year}</sub>
			</div>
		</div>
	);
}

export default Snippet;