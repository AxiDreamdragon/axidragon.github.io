import styles from './FullContentDisplayer.module.css';
import React, { useEffect, useState } from 'react';

const FullContentDisplayer = () => {
	const [show, setShow] = useState<boolean>(false);
	const [content, setContent] = useState<React.ReactNode | null>(null);

	const handleClick = () => {
		if (show) {
			setShow(false);
		}
	}

	const handleContentPressed = (event: Event) => {
		const customEvent = event as CustomEvent;

		setContent(customEvent.detail.source === 'video' ?
			<video src={customEvent.detail.source}
				controls
				autoPlay
				loop
				muted
				playsInline /> :
			<img src={customEvent.detail.source} alt='content' />);

		//timeout to avoid showing the content before the click event is handled
		setTimeout(() => {
			setShow(true);
		}, 0);
	}

	useEffect(() => {
		window.addEventListener('contentPressed', handleContentPressed);
		window.addEventListener('click', handleClick);


		return () => {
			window.removeEventListener('contentPressed', handleContentPressed);
			window.removeEventListener('click', handleClick);
		}
	}, [show]);

	return (
		<div className={styles.container}
			style={{
				backgroundColor: show ? 'var(--shadow)' : 'transparent',
				pointerEvents: show ? 'all' : 'none',
			}}>
			<div className={styles.content}
				style={{
					translate: show ? '0' : '0 -100vh',
				}}>
				{content && content}
			</div>
		</div>
	)
}

export default FullContentDisplayer;