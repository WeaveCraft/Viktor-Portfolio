import { Container, Box, Heading, Image, Link, Button, List, ListItem, Divider } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon';
import Section from '../../components/styles/section'
import Paragraph from '../../components/styles/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../../components/bio'
import Layout from '../../components/layouts/article'
import { SiUdemy, SiCss3, SiYoutube } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa';

const Tech = () => {
  return (
    <Layout id="css">
      <Container>
        <Box borderRadius="lg" bg="#363636" p={3} mb={6} align="center">
          <span style={{ color: '#3B6A96' }}>SELECT</span>
          <span style={{ color: 'white' }}> *</span>
          <span style={{ color: '#3B6A96' }}> FROM</span>
          <span style={{ color: 'white' }}> My.Repo</span> <br />
          <span style={{ color: '#3B6A96' }}>WHERE</span>
          <span style={{ color: 'white' }}> Repo</span>
          <span style={{ color: '#3B6A96' }}> CONTAINS</span>
          <span style={{ color: 'white' }}> 'CSS'</span>
        </Box>

        <Section delay={0.2}>
          <Box flexGrow={1} align="center">
            <Heading as="h2" variant="page-title" >
              <Icon w={16} h={16} color="#48BB78" as={SiCss3} />
            </Heading>
          </Box>
          <Button as={NextLink} variant="ghost" colorScheme="blue" leftIcon={<ChevronLeftIcon />} href="/techs" mr={2}>
            Take Me Back
          </Button>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Ongoing Activity
          </Heading>
          <Paragraph>
            <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
              I am challenging myself with 100DaysCodingPython using PyCharm as my Integrated Development Environment (IDE) to push myself to new heights.
              Throughout this challenge, I am dedicated to constructing innovative solutions for various tasks, including the development of a small-scale "Coffee Machine Application" and other similar projects.
            </Box>
          </Paragraph>

          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              Learning Journey
            </Heading>
            <Paragraph>
              <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
                Having acquired proficiency in C#, I expressed a desire to expand my expertise in backend development by exploring a different programming language.
                Python was among the initial languages I ventured into in 2020.
                Subsequently, my curiosity to delve deeper into Python persisted, prompting me to select it as my next backend language of focus. Presently,
                I am actively engaged in a comprehensive learning experience facilitated by an accomplished instructor via Udemy, meticulously coding alongside her guidance.
                Considering the instructor's preference for PyCharm as the integrated development environment (IDE),
                I made a deliberate choice to align my coding practices by utilizing the same toolset. Embracing novel development tools not only fosters enjoyment but also serves as a source of inspiration for me.
              </Box>
              <Heading as="h3" variant="section-title">
              Reliable References
              </Heading>
              <List>
              <ListItem>
                  <Link href="https://campusnykoping.se/yrkeshogskola/utbildningar/systemutvecklare-net/" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<FaGraduationCap />}
                    >
                      @Campus Nyköping - YH
                    </Button>
                  </Link>
                </ListItem>
                <Divider my={1} />
                <ListItem>
                  <Link href="https://www.udemy.com/course/advanced-aspnet-core-3-razor-pages/" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<SiUdemy />}
                    >
                      @advanced-aspnet-core-3-razor-pages
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<SiUdemy />}
                    >
                      @build-an-app-with-aspnet-core-and-angular-from-scratch
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.udemy.com/course/introduction-to-aspnet-core-x/" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<SiUdemy />}
                    >
                      @introduction-to-aspnet-core
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.udemy.com/course/end-to-end-aspnet-core-31-api-and-blazor-development/" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<SiUdemy />}
                    >
                      @end-to-end-aspnet-core-31-api-and-blazor-development
                    </Button>
                  </Link>
                </ListItem>
                <Divider my={1} />
                <ListItem>
                  <Link href="https://www.youtube.com/watch?v=GhQdlIFylQ8&t=8198s&ab_channel=freeCodeCamp.org" target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="teal"
                      leftIcon={<SiYoutube />}
                    >
                      @freeCodeCamp.org
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Paragraph>

            <Heading as="h3" variant="section-title">
              Projects
            </Heading>
            <BioSection>
              <BioYear>2023</BioYear>
              100DaysCodingPython {' | '}
              <Link as={NextLink} href="/projects" passHref scroll={false}>
                Goto Github Repo
              </Link>
            </BioSection>
            <Box align="center" my={4}>
              <Button
                as={NextLink}
                href="/projects"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
              >
                See All My Projects
              </Button>
            </Box>
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Tech
export { getServerSideProps } from '../../components/chakra'