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
                        Olá, sou Herlon Costa, graduando em Análise e Desenvolvimento de Sistemas,
                        pela Universidade Estácio de Sá, e estou embarcando na emocionante jornada
                        do desenvolvimento de software, com foco especial em JavaScript para criar
                        aplicações web. <br /> <br /> Estou genuinamente empolgado com as infinitas
                        possibilidades que o desenvolvimento de software oferece. A cada linha de
                        código, descubro novos horizontes e desafios que me impulsionam a aprender e
                        crescer. <br /> <br /> Junte-se a mim nesta jornada! Vamos explorar o vasto
                        universo da programação juntos e criar algo incrível. Conecte-se para
                        trocarmos ideias e experiências!
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
