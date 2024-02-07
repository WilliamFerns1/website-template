import {
    Box,
    chakra,
    Stack,
} from '@chakra-ui/react'

export default function LandingPage() {
    return (
        <Box
            pos="relative"
            overflow="hidden"
            backgroundColor="#030637"
            height='100vh'
        >
            <Box maxW="7xl" mx="auto">
                <Box
                    pos="relative"
                    pb={{
                        base: 8,
                        sm: 16,
                        md: 20,
                        lg: 28,
                        xl: 32,
                    }}
                    w="full"
                    border="solid 1px transparent"
                >
                    <Box
                        maxW={{
                            base: "7xl",
                        }}
                        px={{
                            base: 4,
                            sm: 6,
                            lg: 8,
                        }}
                        mt={{
                            base: 12,
                            md: 16,
                            lg: 20,
                            xl: 28,
                        }}
                    >
                        <Box
                            textAlign="center"
                            w={{
                                base: "full",
                                md: 11 / 12,
                                xl: 8 / 12,
                            }}
                            mx="auto"
                        >
                            <chakra.h1
                                fontSize={{
                                    base: "4xl",
                                    sm: "5xl",
                                    md: "6xl",
                                }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color="#fff"
                                _dark={{
                                    color: "white",
                                }}
                            >
                                <chakra.span
                                    display={{
                                        base: "block",
                                        xl: "inline",
                                    }}
                                >
                                    Screen.AI{" "}
                                </chakra.span>
                            </chakra.h1>
                            <chakra.p
                                mt={{
                                    base: 3,
                                    sm: 5,
                                    md: 5,
                                }}
                                mx={{
                                    sm: "auto",
                                    lg: 0,
                                }}
                                mb={6}
                                fontSize={{
                                    base: "lg",
                                    md: "xl",
                                }}
                                color="gray.500"
                                lineHeight="base"
                            >
                                Our new app is a simple and effective tool to help you practice for job interviews. It uses artificial intelligence to create a mock interview based on the job role you're interested in. You talk to the app, and it talks back, just like in a real interview. It's a great way to get comfortable with common interview questions and improve your answers.
                            </chakra.p>
                            <Stack
                                direction={{
                                    base: "column",
                                    sm: "column",
                                    md: "row",
                                }}
                                mb={{
                                    base: 4,
                                    md: 8,
                                }}
                                spacing={{
                                    base: 4,
                                    md: 2,
                                }}
                                justifyContent="center"
                            >
                                <Box rounded="full" shadow="md">
                                    <chakra.a
                                        w="full"
                                        href="/home"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        border="solid 1px transparent"
                                        fontSize={{
                                            base: "md",
                                            md: "lg",
                                        }}
                                        rounded="md"
                                        color="white"
                                        bg="brand.600"
                                        _hover={{
                                            bg: "brand.700",
                                        }}
                                        px={{
                                            base: 8,
                                            md: 10,
                                        }}
                                        py={{
                                            base: 3,
                                            md: 4,
                                        }}
                                        cursor="pointer"
                                    >
                                        Get started
                                    </chakra.a>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
