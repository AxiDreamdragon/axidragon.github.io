import useProjects from "@/hooks/projects";
import { useEffect } from "react";
import ImageSlide from "@/components/ImageSlide/ImageSlide";
import Snippet from "@/components/Snippet/Snippet";
import texel1 from '@/assets/nature/texel1.webp';
import styles from '../ProjectSlide/ProjectSlide.module.scss';

const MinorProjects = () => {
	const { projects, loading, error } = useProjects();

	useEffect(() => {
		console.log('loading is currently', loading);
	}, [loading]);

	return (
		!loading &&
		<ImageSlide imageSource={texel1}>
			<div className={styles.snippetSlideContainer}>
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
			</div>
		</ImageSlide>
	);
};

export default MinorProjects;