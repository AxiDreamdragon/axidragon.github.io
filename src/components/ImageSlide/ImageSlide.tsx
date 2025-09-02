import React, { useEffect, useRef } from 'react';
import styles from './ImageSlide.module.scss';

type Props = {
	imageSource: string;
	children?: React.ReactNode;
	id?: string;
	minorProjects?: boolean;
	noCustomScrolling?: boolean;
}

const ImageSlide: React.FC<Props> = ({ imageSource, children, id = '', minorProjects = false, noCustomScrolling = false }) => {
	const divElementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (minorProjects || noCustomScrolling || !divElementRef.current)
			return;

		const onWheel = (e: WheelEvent) => {
			if (window.innerWidth < 825) {
				return;
			}

			e.preventDefault();

			if (Math.abs(e.deltaY) < 4) {
				//for scrollpads
				return;
			}

			const elementTop = divElementRef.current!.getBoundingClientRect().top + window.scrollY;
			const topDelta = elementTop - window.scrollY;
			const direction = Math.max(Math.min(e.deltaY, 1), -1);

			//there's definitely a more elegant to write all this, but it works
			if (Math.abs(topDelta) < (window.innerWidth / 50)) {
				window.scrollTo({
					top: elementTop + direction * window.innerHeight,
					behavior: 'smooth',
				});
			} else {
				if (topDelta < 0) {
					//element top is above
					window.scrollTo({
						top: elementTop + (direction === 1 ? window.innerHeight : 0),
						behavior: 'smooth',
					});
				} else {
					//element top is below
					window.scrollTo({
						top: elementTop + (direction === 1 ? 0 : -window.innerHeight),
						behavior: 'smooth',
					});
				}
			}
		}

		divElementRef.current.addEventListener('wheel', onWheel, { passive: false });

		return () => {
			divElementRef.current?.removeEventListener('wheel', onWheel);
		}
	}, []);

	return (
		<div
			ref={divElementRef}
			className={`${styles.container} ${minorProjects ? styles.minorProjects : ''}`}
			style={{ backgroundImage: `url(${imageSource})` }}
			{...(id && { id })}>
			{children}
		</div>
	);
};

export default ImageSlide;