import profile from '../assets/profile.jpeg'
import { Box, Image, Heading, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <header>
            <Box className="flex justify-center py-5">
                <Heading className="text-sky-400 py-5 font-bold text-3xl select-none animate-pulse">
                    {'<DevPro/>'}
                </Heading>
            </Box>
            <Box className="flex flex-col items-center">
                <Box className="avatar w-fit rounded-full border-4 border-sky-400 shadow-lg shadow-sky-600">
                    <Image
                        src={profile}
                        alt="profile image avatar"
                        width={200}
                        className="rounded-full"
                    />
                </Box>
                <Box className="mt-5 text-center">
                    <Heading className="text-slate-200 text-3xl select-none">Herlon Costa</Heading>
                    <Text className="text-slate-400 text-xl select-none pb-10">
                        Fullstack Web Developer
                    </Text>
                </Box>
            </Box>
        </header>
    )
}
