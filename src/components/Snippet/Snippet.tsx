import styles from './Snippet.module.scss';
import { useRef } from "react";
import { ProjectData } from "@/hooks/projects";

export const rotationVariation = 5;

type Props = {
	project: ProjectData;
}

function Snippet({ project }: Props) {
	return (
		<div className={styles.Snippet}>
			<div className={styles.cover}>
				{
					project.cover.type === 'image' ?
						<img src={project.cover.src} alt={project.name} /> :
						<video autoPlay muted loop>
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