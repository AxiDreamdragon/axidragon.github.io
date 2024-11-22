import styles from './FullContentDisplayer.module.css';
import React from 'react';

type Props = {
	children?: React.ReactNode;
}

const FullContentDisplayer = ({ children }: Props) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default FullContentDisplayer;