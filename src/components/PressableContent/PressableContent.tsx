import styles from './PressableContent.module.css';

type Props = {
	children?: React.ReactNode;
	videoSource?: string;
	imageSource?: string;
}

const PressableContent = ({ children, videoSource = '', imageSource = '' }: Props) => {
	const type = videoSource ? 'video' : 'image';
	const source = videoSource || imageSource;

	if (!source) {
		console.error('PressableContent: No source provided');
	}

	const handleClick = () => {
		const customEvent = new CustomEvent('contentPressed', { detail: { source, type } });
		window.dispatchEvent(customEvent);
	}

	return (
		<div
			onClick={handleClick}
			className={styles.container}
			title='Click to view full size'
		>
			{children}
		</div>
	)
}

export default PressableContent;