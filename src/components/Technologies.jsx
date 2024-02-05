import { Technology } from './Technology'
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
    Tag,
    TagLabel,
} from '@chakra-ui/react'

export function Techs() {
    return (
        <Accordion allowMultiple marginTop={14}>
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        <Heading className="py-4 text-xl text-sky-400">Technologies</Heading>
                    </Box>
                    <AccordionIcon className="bg-sky-400 rounded-full" />
                </AccordionButton>
                <AccordionPanel className="text-white">
                    <Grid className="grid-cols-3 md:grid-cols-5 gap-1">
                        <Tag className="bg-orange-600 rounded flex justify-center items-center gap-1 font-semibold">
                            <DiHtml5 />
                            <TagLabel>HTML5</TagLabel>
                        </Tag>
                        <Tag className="bg-[#0496ff] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiCss3 />
                            <TagLabel>CSS3</TagLabel>
                        </Tag>
                        <Tag className="bg-[#e4c116] rounded flex justify-center items-center gap-1 text-black font-semibold">
                            <SiJavascript />
                            <TagLabel>Javascript</TagLabel>
                        </Tag>
                        <Tag className="bg-[#7b2cbf] rounded flex justify-center items-center gap-1 font-semibold">
                            <SiBootstrap />
                            <TagLabel>Bootstrap</TagLabel>
                        </Tag>
                        <Tag className="bg-[#d81159] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiSass />
                            <TagLabel>Sass</TagLabel>
                        </Tag>
                        <Tag className="bg-[#07b6d5] rounded flex justify-center items-center gap-1 text-black font-semibold">
                            <SiTailwindcss />
                            <TagLabel>Tailwind</TagLabel>
                        </Tag>
                        <Tag className="bg-[#0474c4] rounded flex justify-center items-center gap-1 text-black font-semibold">
                            <SiTypescript />
                            <TagLabel>TypeScript</TagLabel>
                        </Tag>
                        <Tag className="bg-[#3C823B] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiNodejsSmall />
                            <TagLabel>NodeJS</TagLabel>
                        </Tag>
                        <Tag className="bg-[#00684a] rounded flex justify-center items-center gap-1 text-black font-semibold">
                            <SiMongodb />
                            <TagLabel>MongoDB</TagLabel>
                        </Tag>
                        <Tag className="bg-[#2e2e2e] rounded flex justify-center items-center gap-1 font-semibold">
                            <SiExpress />
                            <TagLabel>Express</TagLabel>
                        </Tag>
                        <Tag className="bg-[#61DAFB] rounded flex justify-center items-center gap-1 text-black font-semibold">
                            <DiReact />
                            <TagLabel>React</TagLabel>
                        </Tag>
                        <Tag className="bg-[#E94D30] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiGit />
                            <TagLabel>Git</TagLabel>
                        </Tag>
                        <Tag className="bg-[#04051a] rounded flex justify-center items-center gap-1 font-semibold">
                            <SiNextdotjs />
                            <TagLabel>Next</TagLabel>
                        </Tag>
                        <Tag className="bg-[#1A1D22] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiGithubBadge />
                            <TagLabel>GitHub</TagLabel>
                        </Tag>
                        <Tag className="bg-[#1A1D22] rounded flex justify-center items-center gap-1 font-semibold">
                            <DiLinux />
                            <TagLabel>Linux</TagLabel>
                        </Tag>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
