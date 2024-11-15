import styles from './PolaroidDivider.module.css';

type Props = {
	children?: React.ReactNode;
}

const PolaroidDivider: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
};

export default PolaroidDivider;