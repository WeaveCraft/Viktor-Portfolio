import { Container, Box, Heading, Image } from '@chakra-ui/react'
import Section from '../components/styles/section'

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
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                <Image borderColor="orange.500" borderWidth={3} borderRadius="full" borderStyle="solid" maxWidth="8rem" display="inline-block" src="/images/viktor.png" alt="Profile Picture"/>
                </Box>
            </Box>

            <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
            Projects
            </Heading>
            <p>Paragraph</p>
            </Section>
        </Container>
    )
}

export default Page