import useProjects from "@/hooks/projects";
import Snippet from "@/components/Snippet/Snippet";
import styles from '../ProjectSlide/ProjectSlide.module.scss';
import { majorProjectCount } from "@/data/constants";

const MinorProjects = () => {
	const { projects, loading, error } = useProjects();

	return (
		<div className={styles.snippetSlide} id="minor-projects">
			{!loading && projects.map((project, i) => (
				i >= majorProjectCount && <Snippet key={project.id} project={project} />
			))}
		</div>
	);
};

export default MinorProjects;