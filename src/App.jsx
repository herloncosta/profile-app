import { Contact } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import './index.css'

function App() {
    return (
        <ChakraProvider theme="dark">
            <Box as="div" className="container flex flex-col gap-8">
                <Header />
                <Presentation />
                <Contact />
                <Footer />
            </Box>
        </ChakraProvider>
    )
}

export default App
