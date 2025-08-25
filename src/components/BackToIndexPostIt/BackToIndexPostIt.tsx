import { useEffect, useRef, useState } from 'react';
import infoIcon from '@/assets/icons/info.png';
import styles from './BackToIndexPostIt.module.css';

const BackToIndexPostIt = () => {
	const workIndex = useRef<HTMLElement>(document.getElementById('WorkIndex') as HTMLElement);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		workIndex.current = document.getElementById('WorkIndex') as HTMLElement;

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
	}, []);



	//TODO: Check when to show the post it
	return (
		<div
			className={styles.postIt}
			title='Back to index'
			onClick={() => workIndex.current.scrollIntoView({ behavior: 'smooth' })}
			style={{ translate: visible ? '0 0' : '0 -128px' }}>
			<img src={infoIcon} className={styles.postItImage} />
		</div >
	);
}

export default BackToIndexPostIt;