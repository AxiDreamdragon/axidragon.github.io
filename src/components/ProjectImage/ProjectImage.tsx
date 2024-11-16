import styles from './ProjectImage.module.css';

export enum FillType {
	HEIGHT = "height",
	WIDTH = "width",
}

type Props = {
	imageSource: string;
	gridRow: number | string;
	gridColumn: number | string;
	fillType: FillType;
}

const ProjectImage: React.FC<Props> = ({ imageSource, gridRow, gridColumn, fillType = FillType.WIDTH }) => {
	return (
		<div className={styles.imageWrapper} style={{ gridRow, gridColumn }} >
			<img src={imageSource} className={styles.projectImage}
				style={{
					[fillType]: '100%',
					objectFit: 'cover',
				}}
			/>
		</div>
	);
}

export default ProjectImage;