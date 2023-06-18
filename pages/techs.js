import { Container, Heading, SimpleGrid, ListItem, List } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { Title, ProjectImage, Meta } from '../components/projects/projectInfo'
import { Box, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { SiCsharp, SiTypescript, SiJavascript, SiPython } from "react-icons/si";
import Paragraph from '../components/styles/paragraph'

const Tech = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Tech Experiences
      </Heading>
      <Paragraph>
      I possess proficiency in several languages and frameworks, along with a track record of successfully implementing projects utilizing these technologies. 
      Feel free to explore further details about my proficiency level in each language by clicking on the respective language.
      </Paragraph>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <List>

            <ListItem>

              <Box alignSelf="center" px="21" py="8">
                <Section>

                  <Flex rounded="xl" direction="column" mt={4} bg="green.400" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "green.500", }}>
                    <Icon color="white" p="4" as={SiCsharp} w="24" h="24" />
                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                      <Meta>Frameworks:</Meta>
                      <span style={{ fontSize: 'small' }}>.NET <br /></span>
                      <Meta>Projects:</Meta>
                      <span style={{ fontSize: 'small' }}>BerrasBio, HamsterWar, PetPal</span>
                    </Text>
                  </Flex>
                  
                <Flex rounded="xl" direction="column" mt={4}
                  bg="#306998" h="25vh" w="25vh" justify="flex-end"
                  _hover={{ bg: "#27567C", }}

                >
                  <Icon as={SiPython} p="4" w="24" h="24" color="white" />
                  <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    <Meta>Frameworks:</Meta>
                    <span style={{ fontSize: 'small' }}>Django <br /></span>
                    <Meta>Projects:</Meta>
                    <span style={{ fontSize: 'small' }}>100DaysCoding</span>
                  </Text>
                </Flex>
                </Section>
                <Flex rounded="xl" direction="column" mt={4}
                  bg="blue.400" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "blue.500", }}>
                  <Icon color="black" p="4" as={SiTypescript} w="24" h="24" />
                  <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                    <Meta>Frameworks:</Meta>
                    <span style={{ fontSize: 'small' }}>React, Angular</span>
                    <Meta>Projects:</Meta>
                    <span style={{ fontSize: 'small' }}>QuoteApp, PetPal</span>
                  </Text>
                </Flex>

                <Flex rounded="xl" direction="column" mt={4}
                  bg="yellow.300" h="25vh" w="25vh" justify="flex-end"
                  _hover={{ bg: "yellow.400", }}

                >
                  <Icon as={SiJavascript} p="4" w="24" h="24" color="black" />
                  <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                    <Meta>Frameworks:</Meta>
                    <span style={{ fontSize: 'small' }}>React.js, Next.js</span>
                    <Meta>Projects:</Meta>
                    <span style={{ fontSize: 'small' }}>MiFamilia, MinimalPortfolio</span>
                  </Text>
                </Flex>


              </Box>
            </ListItem>
          </List>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Tech
export { getServerSideProps } from '../components/projects/chakra'