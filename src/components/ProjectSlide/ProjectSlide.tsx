import ImageSlide from "@components/ImageSlide/ImageSlide";
import PolaroidDivider from "@components/PolaroidDivider/PolaroidDivider";

import styles from './ProjectSlide.module.css';

type Props = {
	backgroundImage: string;
	headerImage: string;
	description: string;
	//TODO: some sliding image class? different type
	children?: React.ReactNode;
}

const ProjectSlide: React.FC<Props> = ({ backgroundImage, headerImage, description, children }) => {
	return (
		<ImageSlide imageSource={backgroundImage}>
			<PolaroidDivider>
				<img src={headerImage} className='polaroid-header' />
			</PolaroidDivider>
			<div className={styles.container}>
				<p className={styles.description}>{description}</p>
				{children}
			</div>
		</ImageSlide>
	);
}

export default ProjectSlide;