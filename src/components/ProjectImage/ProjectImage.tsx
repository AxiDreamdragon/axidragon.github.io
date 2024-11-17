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
	const animationRef = useRef<string>(getRandomAnimation());

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				//for debugging
				setIsVisible(entry.isIntersecting);

				// for production
				// if (entry.isIntersecting) {
				// 	setIsVisible(true);
				// 	observer.unobserve(entry.target);
				// }
			});
		},
			{
				threshold: 1,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		console.log(animationRef.current);

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
					transition: animationRef.current,
				}}
			/>
		</div>
	);
}

export default ProjectImage;

const bezierVariation = 0.25;
const timeVariation = 1;
const baseBezier = [0.19, 1, 0.22, 1];

function getRandomAnimation(): string {
	const time = Math.random() * timeVariation + (0.5 + timeVariation / 2);

	const bezier = baseBezier.map((value, _) => {
		return value + (Math.random() - 0.5) * bezierVariation;
	});

	return `all ${time}s cubic-bezier(${bezier.join(', ')})`;
}
