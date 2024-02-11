import { Box, Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <Box as="footer" className="py-8">
            <Text className="text-center text-sky-400">
                Developed by <a href="https://github.com/herloncosta">Herlon Costa</a>, 2024
                <sup>&reg;</sup>
            </Text>
        </Box>
    )
}
