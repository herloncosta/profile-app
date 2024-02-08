import {
    Box,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react'

export function About() {
    return (
        <Accordion allowMultiple className="border-t-2 border-t-sky-400">
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        <Heading className="py-4 text-xl text-sky-400">About</Heading>
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
