import ProjectItem from "@/components/ProjectItem/ProjectItem";
import ProjectSlide from "@/components/ProjectSlide/ProjectSlide";
import { Fragment } from "react";

type DescriptionArray = (string | React.ReactNode)[];

type ProjectParams = {
	id: number;
	name: string;
	description: DescriptionArray;
	mediaContent: React.ReactNode[];
	headerImage: string;
	backgroundImage: string;
	//year: number;
	//webLink: string;
	//githubLink: string;
}

export default class Project {
	private projectSlide: React.ReactNode;
	private name: string;

	constructor(
		{
			id,
			name,
			description,
			mediaContent,
			headerImage,
			backgroundImage,
		}: ProjectParams
	) {
		this.name = name;

		mediaContent.unshift(this.generateDescription(description));

		this.projectSlide = this.generateProjectSlide(id, mediaContent, headerImage, backgroundImage);
	}

	generateDescription(description: DescriptionArray): React.ReactNode {
		return (
			<ProjectItem gridRowSpan={1} gridColumnSpan={2} disableRotation>
				<div className='description'>
					{description.map((paragraph, index) => {
						if (typeof paragraph === 'string') {
							return <p key={index}>{paragraph}</p>
						} else {
							return <Fragment key={index}>{paragraph}</Fragment>
						}
					})}
				</div>
			</ProjectItem>
		);
	}

	generateProjectSlide(
		id: number,
		mediaContent: React.ReactNode[],
		headerImage: string,
		backgroundImage: string): React.ReactNode {
		return (
			<ProjectSlide
				key={id}
				backgroundImage={backgroundImage}
				headerImage={headerImage}
			>
				{mediaContent.map((media, index) => <Fragment key={index}>{media}</Fragment>)}
			</ProjectSlide>
		);
	}

	getProjectSlide(): React.ReactNode {
		return this.projectSlide;
	}

	getName(): string {
		return this.name;
	}
};