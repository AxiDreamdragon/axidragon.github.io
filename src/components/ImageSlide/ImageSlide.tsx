import React from 'react';
import styles from './ImageSlide.module.css';

type Props = {
	imageSource: string;
	children?: React.ReactNode;
}

const ImageSlide: React.FC<Props> = ({ imageSource, children }) => {
	return (
		<div className={styles.container} style={{ backgroundImage: `url(${imageSource})` }}>
			{children}
		</div>
	);
};

export default ImageSlide;