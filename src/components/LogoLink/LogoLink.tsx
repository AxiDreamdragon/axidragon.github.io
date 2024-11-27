const logoMap = {
	github: require('@/assets/icons/github.png'),
	itch: require('@/assets/icons/itch.png'),
	web: require('@/assets/icons/web.png'),
}

type LogoName = keyof typeof logoMap;

type Props = {
	logoName: LogoName;
	link: string;
	size?: number;
}

const LogoLink: React.FC<Props> = ({ logoName, link, size = 64 }) => {
	const logo = logoMap[logoName];

	return (
		<a href={link} target='_blank' rel='noreferrer'>
			<img src={logo} style={{ width: size }} />
		</a>
	);
}

export default LogoLink;