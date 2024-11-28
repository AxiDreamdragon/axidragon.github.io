import { useEffect, useRef } from 'react';
import styles from './BackToIndexPostIt.module.css';

const BackToIndexPostIt = () => {
	const workIndex = useRef<HTMLElement>(document.getElementById('WorkIndex') as HTMLElement);

	useEffect(() => {
		workIndex.current = document.getElementById('WorkIndex') as HTMLElement;
	}, []);

	return (
		<div className={styles.postIt} onClick={() => workIndex.current.scrollIntoView({ behavior: 'smooth' })}>
			<img src={require('@/assets/icons/web.png')} className={styles.postItImage} />
		</div >
	);
}

export default BackToIndexPostIt;