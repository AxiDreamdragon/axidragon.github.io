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
		console.log('got project', project.name);
		setProject(project);

		let cellsLeft = mediaCells;
		const mediaItems: ProjectItemData[] = [];

		for (const mediaItem of project.media) {
			const x = mediaItem.width || 1;
			const y = mediaItem.height || 1;

			if (cellsLeft >= x * y) {
				cellsLeft -= x * y;
				mediaItems.push(mediaItem);
			}
		}

		setMedia(mediaItems);
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
				translate: project ? '0' : '0 -100vh',
			}}>
			<article className={styles.content}>
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
				</div>
				{media.map((mediaItem, i) => (
					<ProjectItem key={i} disableRotation disableEntrance {...mediaItem} />
				))}
				<div className={styles.backButton} onClick={backButtonPressed} />
			</article>
		</div>
	)
}

export default MinorProjectDisplayer;