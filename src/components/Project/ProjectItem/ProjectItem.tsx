import { useEffect, useRef, useState } from 'react';
import styles from './ProjectItem.module.scss';
import PressableContent from '../../PressableContent/PressableContent';
import { onDesktop } from '@/utility/userInfo';
import { ProjectItemData } from '@/hooks/projects';

export const rotationVariation = 7;

type Props = {
	disableRotation?: boolean;
	snippetItem?: boolean;
} & ProjectItemData;

const ProjectItem = ({
	type,
	src,
	height = 1,
	width = 1,
	disableRotation = false,
	snippetItem = false }: Props) => {
	const [isSeen, setIsSeen] = useState(false);
	const [forceSeen, setForceSeen] = useState(window.innerWidth < 825 || snippetItem);
	const isVisibleRef = useRef<boolean>(false);
	const [hiddenTranslation, setHiddenTranslation] = useState('');
	const [animationTime, setAnimationTime] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const visibleRotationRef = useRef<number>(disableRotation ? 0 : Math.random() * rotationVariation - rotationVariation / 2);
	const hiddenRotationRef = useRef<number>(disableRotation ? 0 : 30 * (Math.random() * rotationVariation - rotationVariation / 2));

	useEffect(() => {
		const baseTime = 1.3;

		if (snippetItem) {
			setAnimationTime(baseTime);
			return;
		}

		if (ref.current && !snippetItem) {
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
		const onResize = () => {
			setForceSeen(window.innerWidth < 825);
		}

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		}
	}, []);

	useEffect(() => {
		if (!videoRef.current) {
			return;
		}

		const onContentPressed = () => {
			if (isVisibleRef.current) {
				videoRef.current?.pause();
			}
		}

		const onFullContentDisplayerClosed = () => {
			if (isVisibleRef.current) {
				videoRef.current?.play();
			}
		}

		window.addEventListener('contentPressed', onContentPressed);
		window.addEventListener('full-content-displayer-closed', onFullContentDisplayerClosed);

		return () => {
			window.removeEventListener('contentPressed', onContentPressed);
			window.removeEventListener('full-content-displayer-closed', onFullContentDisplayerClosed);
		}
	}, []);

	useEffect(() => {
		if (snippetItem) {
			return;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				isVisibleRef.current = entry.isIntersecting;

				if (entry.isIntersecting) {
					setIsSeen(true);

					if (videoRef.current) {
						videoRef.current.play();
					}
				} else if (videoRef.current) {
					videoRef.current.pause();
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

	const show = isSeen || forceSeen;

	return (
		<div className={styles.wrapper}
			ref={ref}
			style={{
				gridRow: `span ${height}`,
				gridColumn: `span ${width}`,
			}} >
			{
				type === 'video' ?
					<PressableContent videoSource={src} fullscreenOnPhone={snippetItem}>
						<video className={styles.projectItem} ref={videoRef} autoPlay={snippetItem} loop muted
							style={{
								transform: show ? `rotate(${visibleRotationRef.current}deg)`
									: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
								transition: `all ${animationTime}s var(--animation-curve)`,
							}}>
							<source src={src} type='video/mp4' />
						</video>
					</PressableContent>
					:
					<PressableContent imageSource={src} fullscreenOnPhone={snippetItem}>
						<img src={src} className={styles.projectItem}
							style={{
								transform: show ? `rotate(${visibleRotationRef.current}deg)`
									: `${hiddenTranslation} rotate(${hiddenRotationRef.current}deg)`,
								transition: `all ${animationTime}s var(--animation-curve)`,
							}}
							alt='Project'
						/>
					</PressableContent>
			}
		</div >
	);
}

export default ProjectItem;
