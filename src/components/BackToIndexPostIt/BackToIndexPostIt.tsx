import { useEffect, useRef, useState } from 'react';
import homeIcon from '@/assets/icons/home.png';
import styles from './BackToIndexPostIt.module.scss';

const BackToIndexPostIt = () => {
	const workIndex = useRef<HTMLElement>(null!);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const init = () => {
			workIndex.current = document.getElementById('WorkIndex') as HTMLElement;

			if (workIndex.current != null) {
				const observer = new IntersectionObserver(
					([entry]) => {
						setVisible(entry.boundingClientRect.top < 0 && !entry.isIntersecting);
					},
					{
						threshold: 0.1,
					}
				);

				if (workIndex.current) {
					observer.observe(workIndex.current);
				}

				return () => {
					if (workIndex.current) {
						observer.unobserve(workIndex.current);
					}
				};
			} else {
				setTimeout(init, 100); //kinda messy, but it works
			}
		}

		init();
	}, []);

	return (
		<div
			className={styles.postIt}
			title='Back to index'
			onClick={() => workIndex.current.scrollIntoView({ behavior: 'smooth' })}
			style={{ translate: visible ? '0 0' : '0 128px' }}>
			<img src={homeIcon} className={styles.postItImage} />
		</div >
	);
}

export default BackToIndexPostIt;