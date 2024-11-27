const logoMap = {
	github:
	{
		logo: require('@/assets/icons/github.png'),
		title: 'GitHub',
	},
	itch:
	{
		logo: require('@/assets/icons/itch.png'),
		title: 'Itch.io',
	},
	web:
	{
		logo: require('@/assets/icons/web.png'),
		title: 'Website',
	},
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
			<img src={logo.logo} style={{ width: size }} title={logo.title} />
		</a>
	);
}

export default LogoLink;