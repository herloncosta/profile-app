import { ImWhatsapp, ImGithub } from 'react-icons/im'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

import { Box, Heading } from '@chakra-ui/react'

export function Contact() {
    return (
        <section className="py-6">
            <Heading className="bg-slate-900 rounded-md text-center uppercase select-none text-sky-400 font-bold p-4 hover:box-">
                Vamos criar um projeto juntos?
            </Heading>
            <Box className="contacts flex justify-center gap-3 mt-6">
                <Box>
                    <a href="https://wa.me/5571983012996" target="_blank">
                        <ImWhatsapp
                            size={36}
                            className="text-green-600 md:text-slate-700 sm:hover:text-green-600 transition-transform ease-in-out duration-300 hover:rotate-360"
                        />
                    </a>
                </Box>
                <Box>
                    <a href="https://www.instagram.com/herloncosta_/" target="_blank">
                        <SiInstagram
                            size={36}
                            className="text-pink-700 md:text-slate-700 sm:hover:text-pink-700 transition-transform ease-in-out duration-300 hover:rotate-360"
                        />
                    </a>
                </Box>
                <Box>
                    <a href="https://github.com/herloncosta" target="_blank">
                        <ImGithub
                            size={36}
                            className="text-slate-200 md:text-slate-700 sm:hover:text-slate-200 transition-transform ease-in-out duration-300 hover:rotate-360"
                        />
                    </a>
                </Box>
                <div>
                    <a href="https://www.linkedin.com/in/herloncosta/" target="_blank">
                        <SiLinkedin
                            size={36}
                            className="text-blue-700 md:text-slate-700 sm:hover:text-blue-700 transition-transform ease-in-out duration-300 hover:rotate-360"
                        />
                    </a>
                </div>
            </Box>
        </section>
    )
}
