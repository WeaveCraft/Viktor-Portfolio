import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import DarkModeToggle from './darkModeToggle'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'orange.500' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      borderRadius="md"
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects"
            path={path}>
            My Projects
          </LinkItem>
          <LinkItem href="/techs"
            path={path}>
            Tech Experiences
          </LinkItem>
          <LinkItem
            href="/works"
            path={path}>
            Work Experiences
          </LinkItem>
          <LinkItem
            href="/studies"
            path={path}>
            Study Experiences
          </LinkItem>
          
        </Stack>

        <Box flex={1} align="right">
          <DarkModeToggle />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/projects">
                  My Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/techs">
                  Tech Experiences
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Work Experiences
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/WeaveCraft/Viktor-Portfolio"
                >
                  My Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar