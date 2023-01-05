import { Technology } from "./Technology";

import "../styles/technologyes.sass";

export function Techs() {
	return (
		<section>
			<div>
				<h2>Tecnologias</h2>
			</div>
			<div className="tech-group">
				<Technology name="HTML5" />
				<Technology name="CSS3" />
				<Technology name="Javascript" />
				<Technology name="Bootstrap" />
				<Technology name="Sass" />
				<Technology name="TailwindCSS" />
				<Technology name="TypeScript" />
				<Technology name="NodeJS" />
				<Technology name="ReactJS" />
				<Technology name="NextJS" />
			</div>
		</section>
	);
}
