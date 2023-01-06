import { Technology } from "./Technology";
import { DiCss3, DiHtml5, DiSass, DiNodejsSmall } from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import "../styles/technologyes.sass";

export function Techs() {
  return (
    <section>
      <div>
        <h2>Tecnologias</h2>
      </div>
      <div className="tech-group">
        <Technology name="HTML5" text="#000" bg="#e76f51" icon={<DiHtml5 />} />
        <Technology name="CSS3" bg="#0496ff" icon={<DiCss3 />} />
        <Technology
          name="Javascript"
          text="#000"
          bg="#e4c116"
          icon={<SiJavascript />}
        />
        <Technology name="Bootstrap" bg="#7b2cbf" icon={<SiBootstrap />} />
        <Technology name="Sass" bg="#d81159" icon={<DiSass />} />
        <Technology
          name="TailwindCSS"
          text="#000"
          bg="#07b6d5"
          icon={<SiTailwindcss />}
        />
        <Technology name="TypeScript" bg="#0474c4" icon={<SiTypescript />} />
        <Technology
          name="NodeJS"
          text="#000"
          bg="#0ead69"
          icon={<DiNodejsSmall />}
        />
        <Technology name="ReactJS" />
        <Technology name="NextJS" />
      </div>
    </section>
  );
}
