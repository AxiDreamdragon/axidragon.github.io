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

const rotationVariation = 7;

const isOnDesktop = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
		return false;
	}
	else {
		return true;
	}
}

const ProjectImage: React.FC<Props> = ({ imageSource, gridRow, gridColumn, fillType = FillType.WIDTH }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [hiddenTranslation, setHiddenTranslation] = useState('');
	const [animationTime, setAnimationTime] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const visibleRotationRef = useRef<number>(Math.random() * rotationVariation - rotationVariation / 2);
	const hiddenRotationRef = useRef<number>(15 * Math.random() * rotationVariation);

	useEffect(() => {
		if (ref.current) {
			const baseTime = 1.3;
			const randomTimeAmplitude = 0.5;
			const centerClosenessMultiplier = 0.5;
			const yAmplitude = 100;

			const rect = ref.current.getBoundingClientRect();
			const x = rect.x + rect.width / 2;

			let translateX = 0;
			let translateY = Math.random() * yAmplitude - yAmplitude / 2;

			if (x < window.innerWidth / 2) {
				translateX = -100;
			} else {
				translateX = 100;
			}

			setHiddenTranslation(`translateX(${translateX}vw) translateY(${translateY}vh)`);

			const centerCloseness = Math.abs(x - window.innerWidth / 2) / (window.innerWidth / 2);
			console.log(x, centerCloseness, imageSource);

			setAnimationTime(baseTime +
				centerCloseness * centerClosenessMultiplier
				+ (Math.random() * randomTimeAmplitude - randomTimeAmplitude / 2));
		}

		console.log(hiddenTranslation);
	}, [ref.current]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				setIsVisible(entry.isIntersecting);
			});
		},
			{
				threshold: isOnDesktop() ? 1 : 0.1,
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
						: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
					transition: `all ${animationTime}s ease-in-out`,
				}}
			/>
		</div>
	);
}

export default ProjectImage;
