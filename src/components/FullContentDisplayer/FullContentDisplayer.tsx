import styles from './FullContentDisplayer.module.scss';
import React, { useEffect, useState } from 'react';

const FullContentDisplayer = () => {
	const [show, setShow] = useState<boolean>(false);
	const [source, setSource] = useState<string>('');
	const [type, setType] = useState<string>('');

	const handleClick = () => {
		if (show) {
			setShow(false);
		}
	}

	const handleContentPressed = (event: Event) => {
		const customEvent = event as CustomEvent;

		setSource(customEvent.detail.source);
		setType(customEvent.detail.type);

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
				{type === 'video' ?
					<video src={source}
						controls
						autoPlay
						loop
						muted
						playsInline /> :
					<img src={source} alt='content' />}
			</div>
		</div>
	)
}

export default FullContentDisplayer;