import ImageSlide from "../ImageSlide/ImageSlide";
import polaroid from '../../assets/roomImages/polaroid.jpg';
import styles from './PolaroidDivider.module.css';

type Props = {
	children?: React.ReactNode;
}

const PolaroidDivider: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<ImageSlide imageSource={polaroid}>
				<div className={styles.content} style={{ gridRow: '1 / 7', gridColumn: '1 / 3' }}>
					{children}
				</div>
			</ImageSlide>
		</div>
	)
};

export default PolaroidDivider;