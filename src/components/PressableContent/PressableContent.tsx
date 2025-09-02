import { onDesktop } from '@/utility/userInfo';
import styles from './PressableContent.module.scss';

type Props = {
	children?: React.ReactNode;
	videoSource?: string;
	imageSource?: string;
	fullscreenOnPhone?: boolean;
}

const PressableContent = ({ children, videoSource = '', imageSource = '', fullscreenOnPhone = false }: Props) => {
	const type = videoSource ? 'video' : 'image';
	const source = videoSource || imageSource;

	if (!source) {
		console.error('PressableContent: No source provided');
	}

	const handleClick = () => {
		if (!fullscreenOnPhone && !onDesktop()) {
			return;
		}

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