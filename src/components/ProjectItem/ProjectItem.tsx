import { useEffect, useRef, useState } from 'react';
import styles from './ProjectItem.module.css';
import PressableContent from '../PressableContent/PressableContent';
import onDesktop from '@/utility/onDesktop';

type Props = {
	imageSource?: string;
	videoSource?: string;
	gridRowSpan: number;
	gridColumnSpan: number;
	children?: React.ReactNode;
	disableRotation?: boolean;
}

const rotationVariation = 7;

const ProjectItem: React.FC<Props> = ({
	imageSource = '',
	videoSource = '',
	gridRowSpan,
	gridColumnSpan,
	children,
	disableRotation = false }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [forceVisible, setForceVisible] = useState(window.innerWidth < 825);
	const [hiddenTranslation, setHiddenTranslation] = useState('');
	const [animationTime, setAnimationTime] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const visibleRotationRef = useRef<number>(disableRotation ? 0 : Math.random() * rotationVariation - rotationVariation / 2);
	const hiddenRotationRef = useRef<number>(30 * (Math.random() * rotationVariation - rotationVariation / 2));

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

	const onResize = () => {
		setForceVisible(window.innerWidth < 825);
	}

	useEffect(() => {
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			});
		},
			{
				threshold: onDesktop() ? 0.8 : 0.1,
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

	const show = isVisible || forceVisible;

	return (
		<div className={styles.wrapper}
			ref={ref}
			style={{
				gridRow: `span ${gridRowSpan}`,
				gridColumn: `span ${gridColumnSpan}`,
			}} >
			{
				imageSource || videoSource ?
					videoSource ?
						<PressableContent videoSource={videoSource}>
							<video className={styles.projectItem} autoPlay loop muted
								style={{
									transform: show ? `rotate(${visibleRotationRef.current}deg)`
										: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
									transition: `all ${animationTime}s var(--animation-curve)`,
								}}>
								<source src={videoSource} type='video/mp4' />
							</video>
						</PressableContent>
						:
						<PressableContent imageSource={imageSource}>
							<img src={imageSource} className={styles.projectItem}
								style={{
									transform: show ? `rotate(${visibleRotationRef.current}deg)`
										: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
									transition: `all ${animationTime}s var(--animation-curve)`,
								}}
								alt='Project'
							/>
						</PressableContent>
					:
					<div className={styles.projectItem}
						style={{
							transform: show ? `rotate(${visibleRotationRef.current}deg)`
								: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
							transition: `all ${animationTime}s var(--animation-curve)`,
						}}>
						{children}
					</div>
			}
		</div >
	);
}

export default ProjectItem;
