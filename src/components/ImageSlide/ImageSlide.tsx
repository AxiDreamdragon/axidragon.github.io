import React from 'react';
import styles from './ImageSlide.module.scss';

type Props = {
	imageSource: string;
	children?: React.ReactNode;
	id?: string;
}

const ImageSlide: React.FC<Props> = ({ imageSource, children, id = '' }) => {
	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${imageSource})` }}
			{...(id && { id })}>
			{children}
		</div>
	);
};

export default ImageSlide;