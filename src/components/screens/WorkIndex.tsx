import polaroid from '@/assets/polaroid.webp';
import workText from '@/assets/text/workMarker.png';
import ImageSlide from '../ImageSlide/ImageSlide';
import PROJECTS from '@/data/projects';
import styles from './WorkIndex.module.css';
import { useEffect, useRef } from 'react';

type ProjectSlides = { [key: string]: HTMLElement };

const WorkIndex = () => {
	const projectSlides = useRef({} as ProjectSlides);

	useEffect(() => {
		PROJECTS.forEach((project, _) => {
			projectSlides.current[project.getName()] = document.getElementById(project.getName()) as HTMLElement;
		});
	}, []);

	const handleClick = (name: string) => {
		projectSlides.current[name].scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<ImageSlide imageSource={polaroid}>
			<div className={styles.container}>
				<img src={workText} className={styles.workText} />
				{PROJECTS.map((project, index) => (
					<p
						key={index}
						onClick={() => handleClick(project.getName())}
						className={styles.clickable}
					>{project.getName()}</p>
				))}
			</div>
		</ImageSlide>
	);
}

export default WorkIndex;