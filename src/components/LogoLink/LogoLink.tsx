import githubLogo from '@/assets/icons/github.png';
import itchLogo from '@/assets/icons/itch.png';
import webLogo from '@/assets/icons/web.png';

const logoMap = {
	github:
	{
		logo: githubLogo,
		title: 'GitHub',
	},
	itch:
	{
		logo: itchLogo,
		title: 'Itch.io',
	},
	web:
	{
		logo: webLogo,
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