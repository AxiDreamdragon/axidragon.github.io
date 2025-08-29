import { useEffect, useState } from 'react';
import styles from './MinorProjectDisplayer.module.scss';
import { ProjectData, ProjectItemData } from '@/hooks/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

const mediaCells = 6;

const MinorProjectDisplayer = () => {
	const [project, setProject] = useState<ProjectData | null>(null);
	const [media, setMedia] = useState<ProjectItemData[]>([]);

	const handleMinorProjectPressed = (event: Event) => {
		const customEvent = event as CustomEvent;
		const project = customEvent.detail as ProjectData;
		setProject(project);

		const items = [];
		let cellsLeft = mediaCells;

		for (const mediaItem of project.media) {
			const scaledWidth = Math.round((mediaItem.width || 1) / (mediaItem.height || 1));
			mediaItem.width = scaledWidth;
			mediaItem.height = 1;

			if (cellsLeft >= mediaItem.width) {
				items.push(mediaItem);
				cellsLeft -= mediaItem.width;

				if (cellsLeft == 0) {
					break;
				}
			}
		}

		//TODO: honestly, wide element (2 width) should take two cells, preferably
		setMedia(items);
	}

	useEffect(() => {
		window.addEventListener('minorProjectPressed', handleMinorProjectPressed);

		return () => {
			window.removeEventListener('minorProjectPressed', handleMinorProjectPressed);
		}
	}, []);

	const backButtonPressed = () => {
		setProject(null);
		setMedia([]);
		window.dispatchEvent(new Event('minorProjectClosed'));
	}

	return (
		<div className={styles.container}
			style={{
				backgroundColor: project ? 'var(--shadow)' : 'transparent',
				pointerEvents: project ? 'all' : 'none',
			}}>
			<article className={styles.content}
				style={{
					translate: project ? '0' : '0 -100vh',
				}}>
				<div className={styles.description}>
					<header>
						<h2>{project?.name}</h2>
					</header>
					<section>
						{project && project.description.map((paragraph, i) =>
							<p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
						)}
					</section>
				</div>
				<div className={styles.linksAndYear}>
					<time>{project?.year}</time>
					{project?.githubLink &&
						<a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
					{project?.webLink &&
						<a href={project.webLink} target="_blank" rel="noopener noreferrer">Website</a>}
				</div>
				{media.map((mediaItem, i) => (
					<ProjectItem key={i} disableRotation snippetItem {...mediaItem} />
				))}
				<div className={styles.backButton} onClick={backButtonPressed} />
			</article>
		</div>
	)
}

export default MinorProjectDisplayer;