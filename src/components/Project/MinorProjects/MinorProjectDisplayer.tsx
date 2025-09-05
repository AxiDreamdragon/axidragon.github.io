import React, { useEffect, useState } from 'react';
import styles from './MinorProjectDisplayer.module.scss';
import { ProjectData, ProjectItemData } from '@/hooks/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import githubIcon from '@/assets/icons/github.png';
import webIcon from '@/assets/icons/web.png';

const mediaCells = 6;

const MinorProjectDisplayer = () => {
	const [project, setProject] = useState<ProjectData | null>(null);
	const [active, setActive] = useState(false);
	const [show, setShow] = useState(false);
	const [media, setMedia] = useState<ProjectItemData[]>([]);

	const handleMinorProjectPressed = (event: Event) => {
		setActive(true);

		const customEvent = event as CustomEvent;
		const project = customEvent.detail as ProjectData;
		setProject(project);

		const items = [];
		let cellsLeft = mediaCells;

		for (const mediaItem of project.media) {
			const w = mediaItem.width || 1;
			const h = mediaItem.height || 1;
			if (cellsLeft >= w * h) {
				items.push(mediaItem);
				cellsLeft -= w * h;

				if (cellsLeft == 0) {
					break;
				}
			}
		}

		setMedia(items);

		setTimeout(() => {
			setShow(true)
		}, 260); //snippet animation duration
	}

	useEffect(() => {
		window.addEventListener('minorProjectPressed', handleMinorProjectPressed);

		return () => {
			window.removeEventListener('minorProjectPressed', handleMinorProjectPressed);
		}
	}, []);

	const backButtonPressed = () => {
		setActive(false);
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
				pointerEvents: active ? 'all' : 'none',
			}}
			onClick={backButtonPressed}>
			<article className={styles.content}
				style={{
					translate: show ? '0' : 'calc(-100dvw - 150px) 0',
					rotate: show ? '0deg' : '10deg',
					filter: show ? undefined : 'drop-shadow(50px 50px 100px var(--shadow))',
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