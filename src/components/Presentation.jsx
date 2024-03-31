import {
    DiCss3,
    DiHtml5,
    DiSass,
    DiNodejsSmall,
    DiReact,
    DiGithubBadge,
    DiLinux,
    DiGit,
} from 'react-icons/di'
import {
    SiJavascript,
    SiBootstrap,
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
} from 'react-icons/si'

import {
    Grid,
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Text,
} from '@chakra-ui/react'
import { CustomTag } from './CustomTag'

export function Presentation() {
    return (
        <Accordion allowMultiple className="my-4">
            <AccordionItem>
                <AccordionButton className="border-t-2 border-t-sky-400">
                    <Box as="span" flex="1" textAlign="left">
                        <Heading className="py-2 text-xl text-sky-400">Habilidades</Heading>
                    </Box>
                    <AccordionIcon className="bg-sky-400 rounded-full" />
                </AccordionButton>

                <AccordionPanel className="text-white">
                    <Grid className="grid-cols-3 md:grid-cols-5 gap-1">
                        <CustomTag content="HTML5" icon={<DiHtml5 />} bg="#ea580c" />
                        <CustomTag content="CSS3" icon={<DiCss3 />} bg="#0496ff" />
                        <CustomTag content="Javascript" icon={<SiJavascript />} bg="#e4c116" dark />
                        <CustomTag content="Bootstrap" icon={<SiBootstrap />} bg="#7b2cbf" />
                        <CustomTag content="TypeScript" icon={<SiTypescript />} bg="#0474c4" />
                        <CustomTag content="Sass" icon={<DiSass />} bg="#d81159" />
                        <CustomTag content="Tailwind" icon={<SiTailwindcss />} bg="#07b6d5" />
                        <CustomTag content="NodeJS" icon={<DiNodejsSmall />} bg="#3C823B" />
                        <CustomTag content="MongoDB" icon={<SiMongodb />} bg="#00684a" />
                        <CustomTag content="ExpressJS" icon={<SiExpress />} bg="#2e2e2e" />
                        <CustomTag content="ReactJS" icon={<DiReact />} bg="#61DAFB" dark />
                        <CustomTag content="Git" icon={<DiGit />} bg="#E94D30" />
                        <CustomTag content="NextJS" icon={<SiNextdotjs />} bg="#04051a" />
                        <CustomTag content="GitHub" icon={<DiGithubBadge />} bg="#1A1D22" />
                        <CustomTag content="Linux" icon={<DiLinux />} bg="#1A1D22" />
                    </Grid>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton className="border-t-2 border-t-sky-400">
                    <Box as="span" flex="1" textAlign="left">
                        <Heading className="py-2 text-xl text-sky-400">Um pouco sobre mim</Heading>
                    </Box>
                    <AccordionIcon className="bg-sky-400 rounded-full" />
                </AccordionButton>

                <AccordionPanel pb={4} className="text-white">
                    <Text>
                        Graduando em Análise e Desenvolvimento de Sistemas, com formação técnica em Redes de Computadores.</br>

                        Em transição de carreira, buscando atuar como Desenvolvedor, sempre buscando aprimorar minhas habilidades e conhecimentos.</br>

                        Hard Skills: HTML, CSS, Javascript, ReactJS, NodeJS, Tailwind, MongoDB, PostgresSQL, API REST, Git, Github, Linux</br>
                        Soft Skills: Comunicação, Proatividade, Resolução de Problemas, Liderança</br></br>

                        Conecte-se comigo!
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
