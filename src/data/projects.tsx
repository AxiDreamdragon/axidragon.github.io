import Project from "@/models/Project";

import wall from '@/assets/room/wall.webp';
import blahaj from '@/assets/room/blahaj.webp';
import workText from '@/assets/text/workMarker.png';
import texel1 from '@/assets/nature/texel1.webp';
import longDesk from '@/assets/room/longDesk.webp';
import door from '@/assets/room/door.webp';
import ProjectItem from "@/components/ProjectItem/ProjectItem";

import broodjeKaasText from '@/assets/text/broodjeKaas.png';

import artkeeperText from '@/assets/text/artkeeper.png';

import sshplusText from '@/assets/text/sshplus.png';

import exersiteText from '@/assets/text/exersite.png';

import exersiteManagerText from '@/assets/text/exersiteManager.png';

import d20TimerText from '@/assets/text/d20Timer.png';

import opinionsNotPeopleText from '@/assets/text/opinionsNotPeople.png';

import portfolioText from '@/assets/text/portfolio.png';

const PROJECTS = [
	new Project({
		id: 0,
		name: "Broodje Kaas",
		description: [
			"Broodje Kaas is a visual novel game commissioned by the Dutch National Police Force.",
			"It teaches new caretakers what to do in case of emergencies in an interactive way.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: broodjeKaasText,
		backgroundImage: texel1,
		year: '2024',
	}),
	new Project({
		id: 1,
		name: "Artkeeper",
		description: [
			"Artkeeper is a tool that tracks time spent focused on any application.",
			"It was created to facilitate time tracking for digital freelancers.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: artkeeperText,
		backgroundImage: texel1,
		year: '2023-2024',
		githubLink: 'https://github.com/AxiDragon/Artkeeper',
	}),
	new Project({
		id: 2,
		name: "SSHPlus",
		description: [
			"SSHPlus is a Chrome Extension to facilitate finding student accomodations on sshxl.nl.",
			"It remembers viewed properties, shows the likelihood that you'll be invited for an introduction night, and has various filters.",
			"This caught the attention of SSH, and they're hoping to implement these features in the future.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: sshplusText,
		backgroundImage: texel1,
		year: '2024',
		githubLink: 'https://github.com/AxiDragon/SSHPlus',
	}),
	new Project({
		id: 3,
		name: "Exersite",
		description: [
			"Exersite is a web app where visitors can vote for exercise that I should do.",
			"I initially created it to counteract that I'm mostly sitting behind a computer.",
			"Admittedly, I don't look at it much anymore - I've got my own exercise routines that I maintain now!"
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: exersiteText,
		backgroundImage: texel1,
		year: '2024',
		webLink: 'https://axidragon.github.io/exersite/',
	}),
	new Project({
		id: 4,
		name: "Exersite Manager",
		description: [
			"Exersite Manager is a JavaFX app for the Exersite web app to easily modify the exercise counts.",
			"It was mainly created for me to learn Java - modifying the counts wasn't really an issue to begin with.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: exersiteManagerText,
		backgroundImage: texel1,
		year: '2024',
	}),
	new Project({
		id: 5,
		name: "D20 Timer",
		description: [
			"D20 Timer is a randomized productivity timer with a bite-sized task creator.",
			"I created it after seeing that random elements in games motivated me to keep playing.",
			"I wanted to incorporate that random element in a more productive context, too!",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: d20TimerText,
		backgroundImage: texel1,
		year: '2024',
		githubLink: 'https://github.com/AxiDragon/d20-timer',
		webLink: 'https://axidragon.github.io/d20-timer/',
	}),
	new Project({
		id: 6,
		name: "Opinions not People",
		description: [
			<p>Opinions not People is a web app for phones to
				reduce <a href='https://en.wikipedia.org/wiki/Out-group_homogeneity' target='blank'>out-group homogeneity bias</a>.</p>,
			"It is currently still a work-in-progress. It should be finished by January 2025.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: opinionsNotPeopleText,
		backgroundImage: texel1,
		year: '2024',
		webLink: 'https://axidragon.github.io/opinions-not-people/',
		githubLink: 'https://github.com/AxiDragon/opinions-not-people',
	}),
	new Project({
		id: 7,
		name: "Portfolio Website",
		description: [
			"This portfolio site, is, well, a culmination of my HTML, CSS, JavaScript, TypeScript and React skills.",
			"It especially thought me a lot about responsive web design.",
		],
		mediaContent: [
			<ProjectItem imageSource={blahaj}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={door}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={wall}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={longDesk}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
		],
		headerImage: portfolioText,
		backgroundImage: texel1,
		year: '2024',
		githubLink: 'https://github.com/AxiDragon/axidragon.github.io',
		webLink: 'https://axidragon.github.io/',
	}),
];

export default PROJECTS;