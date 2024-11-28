import ImageSlide from '../ImageSlide/ImageSlide';
import PROJECTS from '@/data/projects';
import styles from './WorkIndex.module.css';
import { useEffect, useRef } from 'react';

import polaroid from '@/assets/polaroid.webp';
import infoIcon from '@/assets/icons/info.png';

type ProjectSlides = { [key: string]: HTMLElement };

const WorkIndex = () => {
	const projectSlides = useRef({} as ProjectSlides);

	useEffect(() => {
		PROJECTS.forEach((project, _) => {
			projectSlides.current[project.getName()] = document.getElementById(project.getName()) as HTMLElement;
		});

		projectSlides.current['Contact'] = document.getElementById('Contact') as HTMLElement;
	}, []);

	const handleClick = (name: string) => {
		projectSlides.current[name].scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<ImageSlide imageSource={polaroid} id='WorkIndex'>
			<div className={styles.container}>
				<img src={infoIcon} className={styles.infoIcon} />
				{PROJECTS.map((project, index) => (
					<p
						key={index}
						onClick={() => handleClick(project.getName())}
						className={styles.clickable}
					>{project.getName()}</p>
				))}
				<br />
				<p
					onClick={() => handleClick('Contact')}
					className={styles.clickable}
				>Contact</p>
			</div>
		</ImageSlide >
	);
}

export default WorkIndex;