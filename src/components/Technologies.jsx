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
                        <Tag className="bg-orange-600 rounded flex justify-center items-center gap-1 font-medium">
                            <DiHtml5 />
                            <TagLabel className="select-none">HTML5</TagLabel>
                        </Tag>
                        <Tag className="bg-[#0496ff] rounded flex justify-center items-center gap-1 font-medium">
                            <DiCss3 />
                            <TagLabel className="select-none">CSS3</TagLabel>
                        </Tag>
                        <Tag className="bg-[#e4c116] rounded flex justify-center items-center gap-1 text-black font-medium">
                            <SiJavascript />
                            <TagLabel className="select-none">Javascript</TagLabel>
                        </Tag>
                        <Tag className="bg-[#7b2cbf] rounded flex justify-center items-center gap-1 font-medium">
                            <SiBootstrap />
                            <TagLabel className="select-none">Bootstrap</TagLabel>
                        </Tag>
                        <Tag className="bg-[#d81159] rounded flex justify-center items-center gap-1 font-medium">
                            <DiSass />
                            <TagLabel className="select-none">Sass</TagLabel>
                        </Tag>
                        <Tag className="bg-[#07b6d5] rounded flex justify-center items-center gap-1 text-black font-medium">
                            <SiTailwindcss />
                            <TagLabel className="select-none">Tailwind</TagLabel>
                        </Tag>
                        <Tag className="bg-[#0474c4] rounded flex justify-center items-center gap-1 text-black font-medium">
                            <SiTypescript color="#fff" />
                            <TagLabel className="select-none">TypeScript</TagLabel>
                        </Tag>
                        <Tag className="bg-[#3C823B] rounded flex justify-center items-center gap-1 font-medium">
                            <DiNodejsSmall color="#000" />
                            <TagLabel className="select-none">NodeJS</TagLabel>
                        </Tag>
                        <Tag className="bg-[#00684a] rounded flex justify-center items-center gap-1 text-black font-medium">
                            <SiMongodb />
                            <TagLabel className="select-none">MongoDB</TagLabel>
                        </Tag>
                        <Tag className="bg-[#2e2e2e] rounded flex justify-center items-center gap-1 font-medium">
                            <SiExpress />
                            <TagLabel className="select-none">Express</TagLabel>
                        </Tag>
                        <Tag className="bg-[#61DAFB] rounded flex justify-center items-center gap-1 text-black font-medium">
                            <DiReact />
                            <TagLabel className="select-none">React</TagLabel>
                        </Tag>
                        <Tag className="bg-[#E94D30] rounded flex justify-center items-center gap-1 font-medium">
                            <DiGit />
                            <TagLabel className="select-none">Git</TagLabel>
                        </Tag>
                        <Tag className="bg-[#04051a] rounded flex justify-center items-center gap-1 font-medium">
                            <SiNextdotjs />
                            <TagLabel className="select-none">Next</TagLabel>
                        </Tag>
                        <Tag className="bg-[#1A1D22] rounded flex justify-center items-center gap-1 font-medium">
                            <DiGithubBadge />
                            <TagLabel className="select-none">GitHub</TagLabel>
                        </Tag>
                        <Tag className="bg-[#1A1D22] rounded flex justify-center items-center gap-1 font-medium">
                            <DiLinux />
                            <TagLabel className="select-none">Linux</TagLabel>
                        </Tag>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
