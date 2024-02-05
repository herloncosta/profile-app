import { ImWhatsapp, ImGithub } from 'react-icons/im'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

import { Box, Heading } from '@chakra-ui/react'

export function Contact() {
    return (
        <section className="py-16">
            <Heading className="text-center text-sky-400 font-medium py-4">
                Vamos criar um projeto juntos?
            </Heading>
            <Box className="contacts flex justify-center gap-3">
                <Box>
                    <a href="https://wa.me/5571983012996" target="_blank">
                        <ImWhatsapp
                            size={36}
                            className="text-green-600 md:text-slate-700 sm:hover:text-green-600 transition"
                        />
                    </a>
                </Box>
                <Box>
                    <a href="https://www.instagram.com/herloncosta_/" target="_blank">
                        <SiInstagram
                            size={36}
                            className="text-pink-700 md:text-slate-700 sm:hover:text-pink-700 transition"
                        />
                    </a>
                </Box>
                <Box>
                    <a href="https://github.com/herloncosta" target="_blank">
                        <ImGithub
                            size={36}
                            className="text-slate-200 md:text-slate-700 sm:hover:text-slate-200 transition"
                        />
                    </a>
                </Box>
                <div>
                    <a href="https://www.linkedin.com/in/herloncosta/" target="_blank">
                        <SiLinkedin
                            size={36}
                            className="text-blue-700 md:text-slate-700 sm:hover:text-blue-700 transition"
                        />
                    </a>
                </div>
            </Box>
        </section>
    )
}
