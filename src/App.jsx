import { About } from './components/About'
import { Contact } from './components/Contacts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Techs } from './components/Technologies'

import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

function App() {
    return (
        <ChakraProvider theme="dark">
            <div className="container">
                <Header />
                <Techs />
                <About />
                {/*<Contact />
                <Footer /> */}
            </div>
        </ChakraProvider>
    )
}

export default App
