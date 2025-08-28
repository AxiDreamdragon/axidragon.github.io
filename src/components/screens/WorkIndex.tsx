import ImageSlide from '../ImageSlide/ImageSlide';
import styles from './WorkIndex.module.scss';
import { useEffect, useRef } from 'react';

import polaroid from '@/assets/polaroid.webp';
import infoIcon from '@/assets/icons/info.png';
import { majorProjectCount } from '@/data/constants';

type Props = {
	keys: string[];
}

const WorkIndex = ({ keys }: Props) => {
	const projectSlides = useRef<{ [key: string]: HTMLElement }>({});

	useEffect(() => {
		keys.forEach((key, i) => {
			if (i >= majorProjectCount) {
				return;
			}
			projectSlides.current[key] = document.getElementById(key) as HTMLElement;
		});

		projectSlides.current['Other Projects'] = document.getElementById('minor-projects') as HTMLElement;
		projectSlides.current['Contact'] = document.getElementById('Contact') as HTMLElement;
	}, []);

	const handleClick = (name: string) => {
		projectSlides.current[name].scrollIntoView({ behavior: 'smooth' });
	};

	//TODO: prob add headers like 'Major Projects', 'Minor Projects'
	return (
		<ImageSlide imageSource={polaroid} id='WorkIndex'>
			<div className={styles.container}>
				<img src={infoIcon} className={styles.infoIcon} />
				{keys.map((key, i) => (
					i < majorProjectCount &&
					<p
						key={i}
						onClick={() => handleClick(key)}
						className={styles.clickable}
					>{key}</p>
				))}
				<br />
				<p
					onClick={() => handleClick('Other Projects')}
					className={styles.clickable}
				>
					Other Projects
				</p>
				<p
					onClick={() => handleClick('Contact')}
					className={styles.clickable}
				>Contact</p>
			</div>
		</ImageSlide >
	);
}

export default WorkIndex;