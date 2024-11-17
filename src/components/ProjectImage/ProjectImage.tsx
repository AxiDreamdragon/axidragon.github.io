import { useEffect, useRef, useState } from 'react';
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
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				setIsVisible(entry.isIntersecting);
			});
		},
			{
				threshold: 0.5,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};

	}, []);

	return (
		<div className={styles.imageWrapper}
			ref={ref}
			style={{
				gridRow,
				gridColumn,
			}} >
			<img src={imageSource} className={styles.projectImage}
				style={{
					[fillType]: '100%',
					objectFit: 'cover',
					transform: isVisible ? '' : 'translateX(-100vw) translateY(100vh) rotate(45deg)',
					transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				}}
			/>
		</div>
	);
}

export default ProjectImage;