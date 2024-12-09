import Project from "@/models/Project";

import ProjectItem from "@/components/ProjectItem/ProjectItem";

//TODO: Maybe make the background pics a higher resolution
import broodjeKaasText from '@/assets/text/broodjeKaas.png';
import texel1 from '@/assets/nature/texel1.webp';
import broodjeKaasPoster from '@/assets/projects/broodjeKaas/poster.webp';
import broodjeKaasGameScreenshot from '@/assets/projects/broodjeKaas/gameScreenshot.webp';
import broodjeKaas3d from '@/assets/projects/broodjeKaas/3d.webp';
import broodjeKaasGameplay from '@/assets/projects/broodjeKaas/gameplay.mp4';

import artkeeperText from '@/assets/text/artkeeper.png';
import texel4 from '@/assets/nature/texel4.webp';
import artkeeperLongScreenshot from '@/assets/projects/artkeeper/longScreenshot.webp';
import artkeeperDemo from '@/assets/projects/artkeeper/demo.mp4';

import sshplusText from '@/assets/text/sshplus.png';
import texel3 from '@/assets/nature/texel3.webp';
import sshplusHighPosition from '@/assets/projects/sshplus/highPosition.webp';
import sshplusLowPositionUnwanted from '@/assets/projects/sshplus/lowPositionUnwanted.webp';
import sshplusSeen from '@/assets/projects/sshplus/seen.webp';
import sshplusSettings from '@/assets/projects/sshplus/settings.mp4';

import exersiteText from '@/assets/text/exersite.png';
import sheets from '@/assets/room/sheets.webp';
import exersiteDemo from '@/assets/projects/exersite/demo.mp4';

import exersiteManagerText from '@/assets/text/exersiteManager.png';
import boat from '@/assets/nature/boat1.webp';
import exersiteManagerDemo from '@/assets/projects/exersiteManager/demo.mp4';

import d20TimerText from '@/assets/text/d20Timer.png';
import texel2 from '@/assets/nature/texel2.webp';
import d20TimerDemo from '@/assets/projects/d20Timer/demo.mp4';
import d20TimerDice from '@/assets/projects/d20Timer/dice.mp4';
import d20TimerSettings from '@/assets/projects/d20Timer/settings.webp';
import d20TimerStatistics from '@/assets/projects/d20Timer/statistics.webp';

import opinionsNotPeopleText from '@/assets/text/opinionsNotPeople.png';
import texel5 from '@/assets/nature/texel5.webp';
import opinionsNotPeopleIntro from '@/assets/projects/opinionsNotPeople/intro.mp4';
import opinionsNotPeopleInterrogation from '@/assets/projects/opinionsNotPeople/interrogation.mp4';
import opinionsNotPeopleDrag from '@/assets/projects/opinionsNotPeople/drag.mp4';
import opinionsNotPeopleReveal from '@/assets/projects/opinionsNotPeople/reveal.mp4';

import portfolioText from '@/assets/text/portfolio.png';
import desk from '@/assets/room/desk.webp';
import portfolioPhone from '@/assets/projects/portfolio/phone.mp4';
import portfolioDesktop from '@/assets/projects/portfolio/desktop.mp4';

const PROJECTS = [
	new Project({
		id: 0,
		name: "Broodje Kaas",
		description: [
			"Broodje Kaas is a visual novel game commissioned by the Dutch National Police Force.",
			"It teaches new caretakers what to do in case of emergencies in an interactive way.",
			"I was responsible for the 3D art and project management, and contributed to the programming and game design."
		],
		mediaContent: [
			<ProjectItem imageSource={broodjeKaasPoster}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={broodjeKaasGameScreenshot}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={broodjeKaasGameplay}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={broodjeKaas3d}
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
			"I created it to facilitate time tracking for digital freelancers.",
		],
		mediaContent: [
			<ProjectItem imageSource={artkeeperLongScreenshot}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={artkeeperDemo}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
		],
		headerImage: artkeeperText,
		backgroundImage: texel4,
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
			<ProjectItem videoSource={sshplusSettings}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={sshplusSeen}
				gridRowSpan={1}
				gridColumnSpan={2}
			/>,
			<ProjectItem imageSource={sshplusHighPosition}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={sshplusLowPositionUnwanted}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
		],
		headerImage: sshplusText,
		backgroundImage: texel3,
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
			<ProjectItem videoSource={exersiteDemo}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
		],
		headerImage: exersiteText,
		backgroundImage: sheets,
		year: '2024',
		webLink: 'https://axidragon.github.io/exersite/',
	}),
	new Project({
		id: 4,
		name: "Exersite Manager",
		description: [
			"Exersite Manager is a JavaFX app for the Exersite web app to easily modify the exercise counts.",
			"I mainly created it to learn Java - modifying the counts wasn't really an issue to begin with.",
		],
		mediaContent: [
			<ProjectItem videoSource={exersiteManagerDemo}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
		],
		headerImage: exersiteManagerText,
		backgroundImage: boat,
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
			<ProjectItem videoSource={d20TimerDice}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem imageSource={d20TimerStatistics}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={d20TimerDemo}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
			<ProjectItem imageSource={d20TimerSettings}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
		],
		headerImage: d20TimerText,
		backgroundImage: texel2,
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
			<ProjectItem videoSource={opinionsNotPeopleIntro}
				gridRowSpan={2}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={opinionsNotPeopleInterrogation}
				gridRowSpan={2}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={opinionsNotPeopleDrag}
				gridRowSpan={2}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={opinionsNotPeopleReveal}
				gridRowSpan={1}
				gridColumnSpan={1}
			/>,
		],
		headerImage: opinionsNotPeopleText,
		backgroundImage: texel5,
		year: '2024',
		webLink: 'https://axidragon.github.io/opinions-not-people/',
		githubLink: 'https://github.com/AxiDragon/opinions-not-people',
	}),
	new Project({
		id: 7,
		name: "Portfolio Website",
		description: [
			"This portfolio site, is, well, a culmination of my HTML, CSS, JavaScript, TypeScript and React skills.",
			"It especially taught me a lot about responsive web design.",
		],
		mediaContent: [
			<ProjectItem videoSource={portfolioPhone}
				gridRowSpan={3}
				gridColumnSpan={1}
			/>,
			<ProjectItem videoSource={portfolioDesktop}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
		],
		headerImage: portfolioText,
		backgroundImage: desk,
		year: '2024',
		githubLink: 'https://github.com/AxiDragon/axidragon.github.io',
		webLink: 'https://axidragon.github.io/',
	}),
];

export default PROJECTS;