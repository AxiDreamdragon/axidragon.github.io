import polaroid from '@/assets/polaroid.webp';
import workText from '@/assets/text/workMarker.png';
import ImageSlide from '../ImageSlide/ImageSlide';

const WorkIndex = () => {
	<ImageSlide imageSource={polaroid}>
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			width: '100%',
		}}>
			<img src={workText} style={{ width: '100%', maxWidth: 'min(70%, 500px)' }} />
			{/* TODO: Add some index here, for easy navigating */}
		</div>
	</ImageSlide>
}

export default WorkIndex;