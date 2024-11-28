import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";
import LogoLink from "@components/LogoLink/LogoLink";

import styles from './ProjectSlide.module.css';

type Props = {
	backgroundImage: string;
	headerImage: string;
	children?: React.ReactNode;
	id: string;
	year?: string;
	githubLink?: string;
	webLink?: string;
}

//TODO: the ProjectSlide seems to be *just* a little too tall
const ProjectSlide: React.FC<Props> = ({
	backgroundImage,
	headerImage,
	children,
	id = '',
	year = '',
	githubLink = '',
	webLink = '' }) => {
	return (
		<ImageSlide imageSource={backgroundImage} id={id}>
			<PolaroidDivider>
				<img src={headerImage} className='polaroid-header' />
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
				{children}
			</div>
		</ImageSlide>
	);
}

export default ProjectSlide;