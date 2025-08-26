import ImageSlide from "@components/ImageSlide/ImageSlide";
import styles from './ProjectSlide.module.scss';
import Snippet from "../../Snippet/Snippet";

type Props = {
	backgroundImage: string;
	children?: React.ReactNode;
}

const SnippetSlide: React.FC<Props> = ({
	backgroundImage,
	children,
}) => {
	return (
		<ImageSlide imageSource={backgroundImage}>
			<div className={styles.snippetSlideContainer}>
				{children}
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
				<Snippet />
			</div>
		</ImageSlide>
	);
}

export default SnippetSlide;