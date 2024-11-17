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

const rotationVariation = 5;

const ProjectImage: React.FC<Props> = ({ imageSource, gridRow, gridColumn, fillType = FillType.WIDTH }) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const animationRef = useRef<string>(getRandomAnimation());
	const visibleRotationRef = useRef<number>(Math.random() * rotationVariation - rotationVariation / 2);
	const invisibleRotationRef = useRef<number>(15 * Math.random() * rotationVariation);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				setIsVisible(entry.isIntersecting);
			});
		},
			{
				threshold: 1,
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
					transform: isVisible ? `rotate(${visibleRotationRef.current}deg)`
						: `translateX(-100vw) translateY(100vh) rotate(${invisibleRotationRef.current}deg)`,
					transition: animationRef.current,
				}}
			/>
		</div>
	);
}

export default ProjectImage;

const baseTime = 0.75;

function getRandomAnimation(): string {
	const time = Math.random() * baseTime + (baseTime);

	return `all ${time}s ease-in-out`;
}
