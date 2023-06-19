import { Container, Heading, SimpleGrid, ListItem, List } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { Box } from '@chakra-ui/layout'
import { SiCsharp, SiTypescript, SiJavascript, SiPython, SiCss3, SiHtml5, SiDocker, SiGit, SiMicrosoftazure, SiPostgresql, SiMicrosoftsqlserver, SiMongodb } from 'react-icons/si'
import Paragraph from '../components/styles/paragraph'
import TechnologySection from '../components/styles/technology'

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
              <Box alignSelf="center" px="21" py="4">
                <Heading as="h3" fontSize={17.5} mb={0} variant="section-title">
                  Backend Experiences
                </Heading>
                <Section>
                  <TechnologySection
                    bgColor="green.400"
                    icon={SiCsharp}
                    frameworks=".NET"
                    projects="BerrasBio, HamsterWar, PetPal"
                    hoverColor="green.600"
                  />
                  <TechnologySection
                    bgColor="#306998"
                    icon={SiPython}
                    frameworks="Django"
                    projects="100DaysCoding"
                    hoverColor="#27567C"
                  />
                </Section>
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  Frontend Experiences
                </Heading>
                <TechnologySection
                  bgColor="blue.400"
                  icon={SiTypescript}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="blue.600"
                />
                <TechnologySection
                  bgColor="yellow.300"
                  icon={SiJavascript}
                  frameworks="React.js, Next.js"
                  projects="MiFamilia, MinimalPortfolio"
                  hoverColor="yellow.400"
                />
                <TechnologySection
                  bgColor="purple.700"
                  icon={SiCss3}
                  frameworks="Bootstrap, Tailwind, Scss"
                  projects="MiFamilia, MinimalPortfolio, PetPal, HamsterWar, BerrasBio, QuoteApp"
                  hoverColor="purple.800"
                />
                <TechnologySection
                  bgColor="orange.400"
                  icon={SiHtml5}
                  frameworks=""
                  projects="MiFamilia, MinimalPortfolio, PetPal, HamsterWar, BerrasBio, QuoteApp"
                  hoverColor="orange.500"
                />
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  DevOps And Version Control
                </Heading>
                <TechnologySection
                  bgColor="blue.400"
                  icon={SiDocker}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="blue.600"
                />
                <TechnologySection
                  bgColor="blue.500"
                  icon={SiMicrosoftazure}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="blue.600"
                />
                <TechnologySection
                  bgColor="red.300"
                  icon={SiGit}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="red.400"
                />
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  Databases
                </Heading>
                <TechnologySection
                  bgColor="blue.400"
                  icon={SiMicrosoftsqlserver}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="blue.600"
                />
                <TechnologySection
                  bgColor="blue.500"
                  icon={SiPostgresql}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="blue.600"
                />
                     <TechnologySection
                  bgColor="green.500"
                  icon={SiMongodb}
                  frameworks="React, Angular"
                  projects="QuoteApp, PetPal"
                  hoverColor="green.600"
                />
              </Box>
            </ListItem>
          </List>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Tech
export { getServerSideProps } from '../components/chakra'
