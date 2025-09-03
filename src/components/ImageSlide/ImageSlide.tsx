import React, { useEffect, useRef } from 'react';
import styles from './ImageSlide.module.scss';

type Props = {
	imageSource: string;
	children?: React.ReactNode;
	id?: string;
	onView?: () => void; //to be fired the first time the slide is viewed
}

const ImageSlide: React.FC<Props> = ({ imageSource, children, id = '', onView }) => {
	const divElementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!divElementRef.current)
			return;

		const onWheel = (e: WheelEvent) => {
			if (window.innerWidth < 825) {
				return;
			}

			const top = divElementRef.current!.getBoundingClientRect().top;

			if (Math.abs(top) > window.innerHeight * 0.5)
				return; //out of view

			e.preventDefault();

			if (Math.abs(e.deltaY) < 4) {
				//for scrollpads
				return;
			}

			const elementTop = top + window.scrollY;
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

		window.addEventListener('wheel', onWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', onWheel);
		}
	}, []);

	useEffect(() => {
		if (!divElementRef.current)
			return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onView?.();
				}
			},
			{
				threshold: 0,
				rootMargin: '100px',
			}
		);

		if (divElementRef.current) {
			observer.observe(divElementRef.current);
		}

		return () => {
			if (divElementRef.current) {
				observer.unobserve(divElementRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={divElementRef}
			className={styles.container}
			style={{ backgroundImage: `url(${imageSource})` }}
			{...(id && { id })}>
			{children}
		</div>
	);
};

export default ImageSlide;