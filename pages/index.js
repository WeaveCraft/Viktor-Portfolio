import { Container, Box, Heading, Image, Link, Button } from '@chakra-ui/react'
import Section from '../components/styles/section'
import Paragraph from '../components/styles/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="orange.500" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Sweden!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Viktor Hurtig
                    </Heading>
                    <p>Digital Developer ( Frontend / Backend / DevOps )</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image borderColor="orange.500" borderWidth={3} borderRadius="full" borderStyle="solid" maxWidth="8rem" display="inline-block" src="/images/viktor.png" alt="Profile Picture" />
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Paragraph>I am an enthusiastic full-stack developer specializing in .Net technologies, based in Sweden. With a primary focus on backend development, I am passionate about creating innovative digital solutions and continuously expanding my knowledge.
                    I thoroughly enjoy using coding to address real-life problems and take immense pleasure in planning and building digital solutions from the ground up.
                    When I'm not immersed in the world of programming, I find solace in nature and indulge in travel adventures.
                    Exploring the outdoors rejuvenates my spirit and provides inspiration for my work. In my quest to enhance my skill set as a full-stack developer, I am currently engaged in personal projects that serve as a testament to my ongoing learning and growth.
                    You can explore these projects on my {' '}
                    <Link as={NextLink} href="https://github.com/WeaveCraft" passHref scroll={false}>
                        Github
                    </Link>
                    .</Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="orange"
                    >
                        My Portfolio
                    </Button>
                </Box>

            </Section>
        </Container>
    )
}

export default Page