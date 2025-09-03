import useProjects from "@/hooks/projects";
import Snippet from "@/components/Snippet/Snippet";
import styles from '../ProjectSlide/ProjectSlide.module.scss';
import { majorProjectCount } from "@/data/constants";
import { useEffect, useRef, useState } from "react";

const MinorProjects = () => {
	const { projects, loading, error } = useProjects();
	const divElementRef = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (!divElementRef.current)
			return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
				}
			},
			{
				threshold: 0,
				rootMargin: '100px',
			}
		);

		if (divElementRef.current) {
			observer.observe(divElementRef.current);
		}

		return () => {
			if (divElementRef.current) {
				observer.unobserve(divElementRef.current);
			}
		};
	}, []);

	return (
		<div className={styles.snippetSlide} id="minor-projects" ref={divElementRef}>
			{!loading && inView && projects.map((project, i) => (
				i >= majorProjectCount && <Snippet key={project.id} project={project} />
			))}
		</div>
	);
};

export default MinorProjects;