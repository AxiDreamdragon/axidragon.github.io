import WorkIndex from "@/components/screens/WorkIndex";
import { majorProjectCount } from "@/data/constants";
import useProjects from "@/hooks/projects";
import ProjectSlide from "../ProjectSlide/ProjectSlide";

const MajorProjects = () => {
	const { projects, loading, error } = useProjects();

	return (
		!loading && <>
			<WorkIndex keys={projects.map(project => project.name)} />
			{projects.map((project, i) =>
				i < majorProjectCount - 1 && <ProjectSlide key={i} {...project} />)}
		</>
	);
};

export default MajorProjects;