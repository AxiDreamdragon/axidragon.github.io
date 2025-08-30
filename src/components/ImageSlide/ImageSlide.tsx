import React from 'react';
import styles from './ImageSlide.module.scss';

type Props = {
	imageSource: string;
	children?: React.ReactNode;
	id?: string;
	minorProjects?: boolean;
}

const ImageSlide: React.FC<Props> = ({ imageSource, children, id = '', minorProjects = false }) => {
	return (
		<div
			className={`${styles.container} ${minorProjects ? styles.minorProjects : ''}`}
			style={{ backgroundImage: `url(${imageSource})` }}
			{...(id && { id })}>
			{children}
		</div>
	);
};

export default ImageSlide;