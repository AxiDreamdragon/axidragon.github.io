import ImageSlide from '../ImageSlide/ImageSlide';
import styles from './WorkIndex.module.scss';
import { useEffect, useRef } from 'react';

import polaroid from '@/assets/polaroid.webp';
import infoIcon from '@/assets/icons/info.png';

type Props = {
	keys: string[];
}

const WorkIndex = ({ keys }: Props) => {
	const projectSlides = useRef<{ [key: string]: HTMLElement }>({});

	useEffect(() => {
		keys.forEach((key, _) => {
			projectSlides.current[key] = document.getElementById(key) as HTMLElement;
		});

		projectSlides.current['Contact'] = document.getElementById('Contact') as HTMLElement;
	}, []);

	const handleClick = (name: string) => {
		projectSlides.current[name].scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<ImageSlide imageSource={polaroid} id='WorkIndex'>
			<div className={styles.container}>
				<img src={infoIcon} className={styles.infoIcon} />
				{keys.map((key, index) => (
					<p
						key={index}
						onClick={() => handleClick(key)}
						className={styles.clickable}
					>{key}</p>
				))}
				<br />
				<p
					onClick={() => handleClick('Contact')}
					className={styles.clickable}
				>Contact</p>
			</div>
		</ImageSlide >
	);
	return null;
}

export default WorkIndex;