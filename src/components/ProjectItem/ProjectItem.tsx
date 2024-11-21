import { useEffect, useRef, useState } from 'react';
import styles from './ProjectItem.module.css';

type Props = {
	imageSource?: string;
	gridRowSpan: number;
	gridColumnSpan: number;
	children?: React.ReactNode;
	disableRotation?: boolean;
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

const ProjectItem: React.FC<Props> = ({
	imageSource = '',
	gridRowSpan,
	gridColumnSpan,
	children,
	disableRotation = false }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [hiddenTranslation, setHiddenTranslation] = useState('');
	const [animationTime, setAnimationTime] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const visibleRotationRef = useRef<number>(disableRotation ? 0 : Math.random() * rotationVariation - rotationVariation / 2);
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

			setAnimationTime(baseTime +
				centerCloseness * centerClosenessMultiplier
				+ (Math.random() * randomTimeAmplitude - randomTimeAmplitude / 2));
		}
	}, [ref.current]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				setIsVisible(entry.isIntersecting);
			});
		},
			{
				threshold: isOnDesktop() ? 0.8 : 0.1,
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
		<div className={styles.wrapper}
			ref={ref}
			style={{
				gridRow: `span ${gridRowSpan}`,
				gridColumn: `span ${gridColumnSpan}`,
			}} >
			{
				imageSource !== '' ?
					<img src={imageSource} className={styles.projectItem}
						style={{
							transform: isVisible ? `rotate(${visibleRotationRef.current}deg)`
								: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
							transition: `all ${animationTime}s ease-in-out`,
						}}
					/>
					:
					<div className={styles.projectItem}
						style={{
							transform: isVisible ? `rotate(${visibleRotationRef.current}deg)`
								: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
							transition: `all ${animationTime}s ease-in-out`,
						}}>
						{children}
					</div>
			}
		</div>
	);
}

export default ProjectItem;
