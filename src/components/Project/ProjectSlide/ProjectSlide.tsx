import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";
import LogoLink from "@components/LogoLink/LogoLink";

import styles from './ProjectSlide.module.scss';
import { ProjectData } from "@/hooks/projects";
import backgroundImage from '@/assets/nature/texel1.webp';
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectSlide = ({
	id,
	name,
	description,
	media,
	textImage,
	year,
	githubLink = '',
	webLink = '' }: ProjectData) => {
	console.log(name, media);

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