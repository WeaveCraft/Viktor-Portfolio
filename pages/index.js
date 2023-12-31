import { Container, Box, Heading, Image, Link, Button, List, ListItem } from '@chakra-ui/react'
import Section from '../components/styles/section'
import Paragraph from '../components/styles/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import EmailForm from '../components/email-form'
import { Divider } from '@chakra-ui/react'

const Page = () => {
    return (
        <Layout>
            <Container>



                <Box borderRadius="lg" bg="orange.500" p={3} mb={6} align="center">
                    Hello, I&apos;m a full-stack developer based in Södermanland!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Viktor Hurtig
                        </Heading>
                        <p>Software Developer ( Frontend / Backend  )</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image borderColor="orange.500" borderWidth={3} borderRadius="full" borderStyle="solid" maxWidth="8rem" display="inline-block" src="/images/viktor.png" alt="Profile Picture" />
                    </Box>
                </Box>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Who Am I?
                    </Heading>
                    <Paragraph>I am an enthusiastic full-stack developer specializing in .Net technologies. With a primary focus on backend development, I am passionate about creating innovative digital solutions and continuously expanding my knowledge.
                        I thoroughly enjoy using coding to address real-life problems and take immense pleasure in planning and building digital solutions from the ground up.
                        When I&apos;m not immersed in the world of programming, I find solace in nature and indulge in travel adventures.
                        Exploring the outdoors rejuvenates my spirit and provides inspiration for my work. In my quest to enhance my skill set as a full-stack developer,
                        I am currently engaged in personal projects that serve as a testament to my ongoing learning and growth.
                        You can explore these repositories on my {' '}
                        <Link as={NextLink} href="/projects" passHref scroll={false}>
                            projects page
                        </Link>
                        .</Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/techs"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="orange"
                        >
                            See My Current Tech Skills
                        </Button>
                    </Box>
                    <Section delay={0.4}>
                        <Heading as="h3" variant="section-title">
                            Important Moments
                        </Heading>
                        <BioSection>
                            <BioYear>1994</BioYear>
                            Born in Nyköping.
                        </BioSection>
                        <BioSection>
                            <BioYear>2013</BioYear>
                            Graduated Highschool Tessin in Nyköping.
                        </BioSection>
                        <BioSection>
                            <BioYear>2014</BioYear>
                            Backpacked in Australia & USA - California.
                        </BioSection>
                        <BioSection>
                            <BioYear>2015</BioYear>
                            Started learning Japanese through university in Sweden.
                        </BioSection>
                        <BioSection>
                            <BioYear>2016</BioYear>
                            Went to Language school in Japan - Tokyo.
                        </BioSection>
                        <BioSection>
                            <BioYear>2017</BioYear>
                            Moved to Sweden and studied japanese in university.
                        </BioSection>
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Work and current job at Skavsta Airport with Airport Security.
                        </BioSection>
                        <BioSection>
                            <BioYear>2019</BioYear>
                            Started studying mathematics, physics and chemistry.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Self-studying to learn programming.
                        </BioSection>
                        <BioSection>
                            <BioYear>2021</BioYear>
                            .NET Software Developer education at Campus Nyköping.
                        </BioSection>
                        <BioSection>
                            <BioYear>2022</BioYear>
                            Fullstack Internship at LearningWell AB.
                        </BioSection>
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Graduated from my Software Development Program!
                        </BioSection>
                        <Box align="center" my={4}>
                            <Button
                                as={NextLink}
                                href="/works"
                                scroll={false}
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="orange"
                            >
                                See My Work Experiences
                            </Button>
                        </Box>

                        <Section delay={0.5}>
                            <Heading as="h3" variant="section-title">
                                Nerd ♥
                            </Heading>
                            <Paragraph>
                                Coding, UX/UI Design, Voxel Art, Video Games, Personal Projects
                            </Paragraph>
                            <Heading as="h3" variant="section-title">
                                I Also ♥
                            </Heading>
                            <Paragraph>
                                Workout, Traveling, Friends/Family, Outdoors, Baking
                            </Paragraph>
                        </Section>
                        <Heading as="h3" variant="section-title">
                            Where To Find Me
                        </Heading>
                        <List>
                            <ListItem>
                                <Link href="https://github.com/WeaveCraft" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoGithub />}
                                    >
                                        @WeaveCraft
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/viktor-hurtig-330547216/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoLinkedin />}
                                    >
                                        @viktor-hurtig
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.instagram.com/vihu_1994/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoInstagram />}
                                    >
                                        @vihu_1994
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                </Section>
                <Divider />
                <EmailForm />

            </Container>
        </Layout>
    )
}

export default Page
export { getServerSideProps } from '../components/chakra'