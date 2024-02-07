import {
    Box,
    Link,
    Flex,
    Text,
    IconButton,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react'

import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'

import { FaDiscord, FaTwitter } from "react-icons/fa";


import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";

export default function Header() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
                backgroundColor="#030637"
                color={'#fff'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align={{ base: 'center', md: 'center'}}>
                    <Text
                        as={Link}
                        href="/"
                        textAlign={useBreakpointValue({ base: 'right', md: 'left' })}
                        fontFamily={'heading'}
                        fontSize={'xl'}
                        fontWeight={"bold"}
                        alignItems="center"  // Vertically align items
                        display={{ base: 'none', md: 'flex' }}
                        justifyContent="center"
                        color={'#fff'}>
                        Screen.AI
                    </Text>
                    <Flex
                        marginLeft="auto"
                        alignItems="center"
                        justifyContent="center"
                        gap="20px"
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link
                            fontWeight={"bold"}
                            fontSize="xl"
                            href="/dashboard"
                        >
                            Dashboard
                        </Link>
                        <Link
                            fontWeight={"bold"}
                            fontSize="xl"
                            href="/credits"
                        >
                            Credits
                        </Link>
                        <Link
                            fontWeight={"bold"}
                            fontSize="xl"
                            href="/interview-history"
                        >
                            Inteview History
                        </Link>
                    </Flex>
                    <Flex
                        marginLeft="auto"
                        alignItems="center"
                        justifyContent="center"
                        gap="20px"
                    >
                        <SignedIn>
                            {/* Mount the UserButton component */}
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <Box
                                backgroundColor="#EA4C89"
                                borderRadius="8px"
                                border="none"
                                boxSizing="border-box"
                                color="#FFFFFF"
                                cursor="pointer"
                                display="inline-block"
                                fontFamily='"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                fontSize="14px"
                                fontWeight="500"
                                height="40px"
                                lineHeight="20px"
                                margin="0"
                                outline="none"
                                padding="10px 16px"
                                position="relative"
                                textAlign="center"
                                textDecoration="none"
                                transition="color 100ms"
                                verticalAlign="baseline"
                                userSelect="none"
                                _hover={{
                                    backgroundColor: '#F082AC',
                                }}
                                _focus={{
                                    backgroundColor: '#F082AC',
                                }}
                                marginLeft="auto"
                            >
                                <SignInButton />
                            </Box>
                        </SignedOut>
                    </Flex>
                </Flex>

            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Flex
            gap="20px"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('white', 'gray.800')}
            padding={'25px'}
            borderBottom="1px solid black"
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Flex>
    )
}

const MobileNavItem = ({ label, href }) => {

    return (
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                _hover={{
                    textDecoration: 'none',
                }}
                width="fit-content"
            >
                <Text
                    width="fit-content"
                    fontWeight={600}
                    fontSize="l"
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
            </Box>

    )
}
const NAV_ITEMS = [

    {
        label: 'Home',
        href: "/"
    },
    {
        label: 'App',
        href: "/mobile-app"
    },
    {
        label: 'About',
        href: "/about"
    },
    {
        label: 'Profile',
        href: "/profile"
    }
];
