import useProjects from "@/hooks/projects";
import ImageSlide from "@/components/ImageSlide/ImageSlide";
import Snippet from "@/components/Snippet/Snippet";
import texel1 from '@/assets/nature/texel1.webp';
import styles from '../ProjectSlide/ProjectSlide.module.scss';
import { majorProjectCount } from "@/data/constants";

const MinorProjects = () => {
	const { projects, loading, error } = useProjects();

	return (
		<ImageSlide imageSource={texel1} minorProjects id="minor-projects">
			<div className={styles.snippetSlide}>
				{!loading && projects.map((project, i) => (
					i >= majorProjectCount && <Snippet key={project.id} project={project} />
				))}
			</div>
		</ImageSlide>
	);
};

export default MinorProjects;