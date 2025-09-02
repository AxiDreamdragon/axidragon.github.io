import React, { useEffect, useState } from 'react';
import styles from './MinorProjectDisplayer.module.scss';
import { ProjectData, ProjectItemData } from '@/hooks/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import githubIcon from '@/assets/icons/github.png';
import webIcon from '@/assets/icons/web.png';

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

	const preventClose = (e: React.MouseEvent) => {
		e.stopPropagation();
	}

	return (
		<div className={styles.container}
			style={{
				backgroundColor: show ? 'var(--shadow)' : 'transparent',
				pointerEvents: show ? 'all' : 'none',
			}}
			onClick={backButtonPressed}>
			<article className={styles.content}
				style={{
					translate: show ? '0' : '-200dvw 0',
				}}
				onClick={preventClose}>
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

				{media.map((mediaItem, i) => (
					<ProjectItem key={i + mediaItem.src} disableRotation snippetItem {...mediaItem} />
				))}
				<footer className={styles.bottomBarContainer}>
					<div className={styles.bottomBar}>
						<div className={styles.backButton} onClick={backButtonPressed} />
						<div className={styles.linksAndYear}>
							{project?.githubLink &&
								<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
									<img src={githubIcon} alt="GitHub" className={styles.icon} />
								</a>}
							{project?.webLink &&
								<a href={project.webLink} target="_blank" rel="noopener noreferrer">
									<img src={webIcon} alt="Website" className={styles.icon} />
								</a>}
							<time className={styles.year}>{project?.year}</time>
						</div>
					</div>
				</footer>
			</article>
		</div>
	)
}

export default MinorProjectDisplayer;