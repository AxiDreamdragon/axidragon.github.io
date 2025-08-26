import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";
import LogoLink from "@components/LogoLink/LogoLink";

import styles from './ProjectSlide.module.scss';
import { ProjectData } from "@/hooks/projects";
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ProjectItem from "../ProjectItem/ProjectItem";
import { useState } from "react";

import bg1 from '@/assets/nature/texel1.webp';
import bg2 from '@/assets/nature/texel2.webp';
import bg3 from '@/assets/nature/texel3.webp';
import bg4 from '@/assets/nature/texel4.webp';
import bg5 from '@/assets/nature/texel5.webp';
import bg6 from '@/assets/nature/boat1.webp';


const allBackgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];
let availableBackgrounds = [...allBackgrounds];

const getBackground = (): string => {
	if (availableBackgrounds.length === 0) {
		availableBackgrounds = [...allBackgrounds];
	}

	const randomIndex = Math.floor(Math.random() * availableBackgrounds.length);
	return availableBackgrounds.splice(randomIndex, 1)[0];
}


const ProjectSlide = ({
	id,
	name,
	description,
	media,
	textImage,
	year,
	githubLink = '',
	webLink = '' }: ProjectData) => {
	const [backgroundImage, _] = useState<string>(getBackground());

	return (
		<ImageSlide imageSource={backgroundImage} id={id}>
			<PolaroidDivider>
				<img src={textImage} className='polaroid-header' alt={id} title={id} />
				<div className={styles.infoContainer}>
					{year && <p className={styles.year}>{year}</p>}
					{(githubLink || webLink) &&
						<div className={styles.infoContainer}>
							{githubLink && <LogoLink logoName="github" link={githubLink} />}
							{webLink && <LogoLink logoName="web" link={webLink} />}
						</div>
					}
				</div>
			</PolaroidDivider>
			<div className={styles.container}>
				<ProjectDescription description={description} />
				{media.map((item, i) =>
					<ProjectItem key={i} {...item} />)}
			</div>
		</ImageSlide>
	);
}

export default ProjectSlide;