import ProjectItem from "@/components/Project/ProjectItem/ProjectItem";

import { useEffect, useState } from "react";

export type ProjectData = {
	id: string;
	name: string;
	description: string[];
	media: ProjectItemData[];
	textImage: string;
	year: string | number;
	githubLink?: string;
	webLink?: string;
}

export type ProjectItemData = {
	type: 'image' | 'video';
	src: string;
	height?: number; //aspect ratio
	width?: number; //aspect ratio
}

const useProjects = () => {
	const [projects, setProjects] = useState<ProjectData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				setLoading(true);
				const response = await fetch('https://axidreamdragon-project-media.pages.dev/projects.json');
				const data = await response.json();
				setProjects(data.projects);
			} catch (err) {
				console.error(err);
				setError(err instanceof Error ? err.message : 'Error occurred whilst fetching');
			} finally {
				setLoading(false);
			}
		}

		fetchProjects();
	}, []);

	return { projects, loading, error };
}

export default useProjects;
