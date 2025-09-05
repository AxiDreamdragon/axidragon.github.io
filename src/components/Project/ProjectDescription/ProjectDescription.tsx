import styles from '../ProjectItem/ProjectItem.module.scss';

type Props = {
	description: string[];
}

const ProjectDescription = ({ description }: Props) => {
	return (
		<div className={styles.wrapper} style={{
			gridRow: 'span 1',
			gridColumn: `span ${description.length > 3 ? 3 : 2}`
		}}>
			<div className={styles.projectItem}>
				<div className="description">
					{description.map((value, i) =>
						<p key={i} dangerouslySetInnerHTML={{ __html: value }} />
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectDescription;