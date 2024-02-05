import profile from '../assets/profile.jpeg'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <header>
            <Box className="flex justify-center py-5">
                <Heading className="text-sky-400 font-bold text-3xl select-none">
                    {'<HerlonCosta/>'}
                </Heading>
            </Box>
            <Box className="flex flex-col items-center">
                <Box className="w-fit rounded-full border-2 border-sky-600">
                    <Image
                        src={profile}
                        alt="profile image avatar"
                        width={200}
                        border={4}
                        loading="lazy"
                        className="rounded-full"
                    />
                </Box>
                <Box className="mt-5 text-center">
                    <Text className="text-slate-200 text-2xl select-none">Web Developer</Text>
                </Box>
            </Box>
        </header>
    )
}
