import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";

import styles from './ProjectSlide.module.css';

type Props = {
	backgroundImage: string;
	headerImage: string;
	children?: React.ReactNode;
	//TODO: Add an easy way to add links to the project's page, source code or playable game (if allowed/possible)
	//TODO: Just, what info is important also? Date?
	//I probably just want to create some 'Project' data class containing all this info, so that
	//in the app component I can just pass an array of all projects and map them
}

const ProjectSlide: React.FC<Props> = ({ backgroundImage, headerImage, children }) => {
	return (
		<ImageSlide imageSource={backgroundImage}>
			<PolaroidDivider>
				<img src={headerImage} className='polaroid-header' />
			</PolaroidDivider>
			<div className={styles.container}>
				{children}
			</div>
		</ImageSlide>
	);
}

export default ProjectSlide;