import { useEffect, useRef, useState } from 'react';
import styles from './MinorProjectDisplayer.module.scss';
import { ProjectData, ProjectItemData } from '@/hooks/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

const mediaCells = 6;

const MinorProjectDisplayer = () => {
	const [project, setProject] = useState<ProjectData | null>(null);
	const [show, setShow] = useState(false);
	const [media, setMedia] = useState<ProjectItemData[]>([]);

	const handleMinorProjectPressed = (event: Event) => {
		setShow(true);

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

		setMedia(items);
	}

	useEffect(() => {
		window.addEventListener('minorProjectPressed', handleMinorProjectPressed);

		return () => {
			window.removeEventListener('minorProjectPressed', handleMinorProjectPressed);
		}
	}, []);

	const backButtonPressed = () => {
		setShow(false);
		window.dispatchEvent(new Event('minorProjectClosed'));
	}

	return (
		<div className={styles.container}
			style={{
				backgroundColor: show ? 'var(--shadow)' : 'transparent',
				pointerEvents: show ? 'all' : 'none',
			}}>
			<article className={styles.content}
				style={{
					translate: show ? '0' : '-200dvw 0',
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
					<ProjectItem key={i + mediaItem.src} disableRotation snippetItem {...mediaItem} />
				))}
				<div className={styles.backButton} onClick={backButtonPressed} />
			</article>
		</div>
	)
}

export default MinorProjectDisplayer;