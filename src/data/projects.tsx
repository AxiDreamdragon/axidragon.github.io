import Project from "@/models/Project";

import ProjectItem from "@/components/ProjectItem/ProjectItem";

//TODO: Maybe make the background pics a higher resolution
import broodjeKaasText from '@/assets/text/broodje-kaas.png';
import texel1 from '@/assets/nature/texel1.webp';
import broodjeKaasPoster from '@/assets/projects/broodjeKaas/poster.webp';
import broodjeKaasGameScreenshot from '@/assets/projects/broodjeKaas/game-screenshot.webp';
import broodjeKaas3d from '@/assets/projects/broodjeKaas/3d.webp';
import broodjeKaasGameplay from '@/assets/projects/broodjeKaas/gameplay.mp4';

import artkeeperText from '@/assets/text/artkeeper.png';
import texel4 from '@/assets/nature/texel4.webp';
import artkeeperLongScreenshot from '@/assets/projects/artkeeper/long-screenshot.webp';
import artkeeperDemo from '@/assets/projects/artkeeper/demo.mp4';

import sshplusText from '@/assets/text/sshplus.png';
import texel3 from '@/assets/nature/texel3.webp';
import sshplusHighPosition from '@/assets/projects/sshplus/high-position.webp';
import sshplusLowPositionUnwanted from '@/assets/projects/sshplus/low-position-unwanted.webp';
import sshplusSeen from '@/assets/projects/sshplus/seen.webp';
import sshplusSettings from '@/assets/projects/sshplus/settings.mp4';

import exersiteText from '@/assets/text/exersite.png';
import sheets from '@/assets/room/sheets.webp';
import exersiteDemo from '@/assets/projects/exersite/demo.mp4';

import exersiteManagerText from '@/assets/text/exersite-manager.png';
import boat from '@/assets/nature/boat1.webp';
import exersiteManagerDemo from '@/assets/projects/exersiteManager/demo.mp4';

import d20TimerText from '@/assets/text/d20Timer.png';
import texel2 from '@/assets/nature/texel2.webp';
import d20TimerDemo from '@/assets/projects/d20Timer/demo.mp4';
import d20TimerDice from '@/assets/projects/d20Timer/dice.mp4';
import d20TimerSettings from '@/assets/projects/d20Timer/settings.webp';
import d20TimerStatistics from '@/assets/projects/d20Timer/statistics.webp';

import outgroupOdysseyText from '@/assets/text/outgroup-odyssey.png';
import texel5 from '@/assets/nature/texel5.webp';
import peopleNotOpinionsIntro from '@/assets/projects/outgroupOdyssey/pno-intro.mp4';
import opinionsNotPeopleInterrogation from '@/assets/projects/outgroupOdyssey/onp-interrogation.mp4';
import outgroupOdysseyOutgroupGraph from '@/assets/projects/outgroupOdyssey/outgroup.mp4';
import outgroupOdysseyBiasChart from '@/assets/projects/outgroupOdyssey/bias.mp4';

import portfolioText from '@/assets/text/portfolio.png';
import desk from '@/assets/room/desk.webp';
import portfolioPhone from '@/assets/projects/portfolio/phone.mp4';
import portfolioDesktop from '@/assets/projects/portfolio/desktop.mp4';

import gamesText from '@/assets/text/games.png';
import cubismWithASideOfThorns from '@/assets/projects/games/cubism-with-a-side-of-thorns.mp4';
import dolphinAndFeathersInc from '@/assets/projects/games/dolphin-and-feathers-inc.mp4';
import flickflock from '@/assets/projects/games/flickflock.mp4';
import gunbloem from '@/assets/projects/games/gunbloem.mp4';
import shawawofi from '@/assets/projects/games/shawawofi.mp4';
import superBeanIsle from '@/assets/projects/games/super-bean-isle.mp4';
import wiwi from '@/assets/projects/games/wiwi.mp4';

const DOMAIN = 'https://www.axidreamdragon.com/';

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
			/>,
			<ProjectItem imageSource={broodjeKaasGameScreenshot} />,
			<ProjectItem videoSource={broodjeKaasGameplay} />,
			<ProjectItem imageSource={broodjeKaas3d}
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
			/>,
			<ProjectItem imageSource={sshplusSeen}
				gridColumnSpan={2}
			/>,
			<ProjectItem imageSource={sshplusHighPosition} />,
			<ProjectItem imageSource={sshplusLowPositionUnwanted} />,
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
		webLink: DOMAIN + 'exersite/',
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
			<ProjectItem videoSource={d20TimerDice} />,
			<ProjectItem imageSource={d20TimerStatistics} />,
			<ProjectItem videoSource={d20TimerDemo}
				gridRowSpan={2}
				gridColumnSpan={2}
			/>,
			<ProjectItem imageSource={d20TimerSettings} />,
		],
		headerImage: d20TimerText,
		backgroundImage: texel2,
		year: '2024',
		githubLink: 'https://github.com/AxiDragon/d20-timer',
		webLink: DOMAIN + 'd20-timer/',
	}),
	new Project({
		id: 6,
		name: "Outgroup Odyssey",
		description: [
			<p>Outgroup Odyssey is a web app for phones about <a href='https://en.wikipedia.org/wiki/Out-group_homogeneity' target='blank'>outgroup homogeneity bias</a>.
				and what can be done to combat it.</p>,
			"I wanted to explore the potential of applied games in web development. In its process, I learned a lot about prototyping in a web context.",
		],
		mediaContent: [
			<ProjectItem videoSource={opinionsNotPeopleInterrogation}
				gridRowSpan={2}
			/>,
			<ProjectItem videoSource={outgroupOdysseyBiasChart}
				gridRowSpan={2}
			/>,
			<ProjectItem videoSource={outgroupOdysseyOutgroupGraph}
				gridRowSpan={2}
			/>,
			<ProjectItem videoSource={peopleNotOpinionsIntro} />,
		],
		headerImage: outgroupOdysseyText,
		backgroundImage: texel5,
		year: '2025',
		webLink: DOMAIN + 'outgroup-odyssey/',
		githubLink: 'https://github.com/AxiDragon/outgroup-odyssey',
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
		webLink: DOMAIN + '',
	}),
	new Project({
		id: 8,
		name: "Games",
		description: [
			"I can't deny that making games was the start of my programming journey.",
			"Making these games taught me a lot about programming in general, but also what I truly wanted to do with my life.",
			"Although I am no longer making games, this phase was a crucial part of my life which I'm grateful for, and it would feel wrong to leave them out!",
		],
		mediaContent: [
			<ProjectItem videoSource={superBeanIsle} />,
			<ProjectItem videoSource={gunbloem} />,
			<ProjectItem videoSource={cubismWithASideOfThorns} />,
			<ProjectItem videoSource={shawawofi} />,
			<ProjectItem videoSource={flickflock} />,
			<ProjectItem videoSource={dolphinAndFeathersInc} />,
			<ProjectItem videoSource={wiwi} />,
		],
		headerImage: gamesText,
		backgroundImage: texel1,
		year: '2022-2024',
		webLink: 'https://axidreamdragon.itch.io/',
	}),
];

export default PROJECTS;