import { Container, Heading, SimpleGrid, ListItem, List } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { Box } from '@chakra-ui/layout'
import { SiCsharp, SiTypescript, SiJavascript, SiPython, SiCss3, SiHtml5, SiDocker, SiGit, SiMicrosoftazure, SiPostgresql, SiMicrosoftsqlserver, SiMongodb } from 'react-icons/si'
import Paragraph from '../components/styles/paragraph'
import TechnologySection from '../components/styles/technology'

const Tech = () => (
  <Layout title="Techs">
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
                    id="csharp"
                    title="Csharp"
                    bgColor="green.400"
                    icon={SiCsharp}
                    frameworks=".NET, ASP.NET, Entity Framework, Dapper"
                    hoverColor="green.600"
                    language="CSHARP"
                  />
                  <TechnologySection
                    id="python"
                    title="Python"
                    bgColor="#306998"
                    icon={SiPython}
                    frameworks="Django"
                    hoverColor="#27567C"
                    language="PYTHON"
                  />
                </Section>
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  Frontend Experiences
                </Heading>
                <TechnologySection
                  id="typescript"
                  bgColor="blue.400"
                  icon={SiTypescript}
                  frameworks="React, Angular"
                  hoverColor="blue.600"
                  language="TYPESCRIPT"
                />
                <TechnologySection
                  id="javascript"
                  bgColor="yellow.300"
                  icon={SiJavascript}
                  frameworks="React.js, Next.js"
                  hoverColor="yellow.400"
                  language="JAVASCRIPT"
                />
                <TechnologySection
                  id="css"
                  bgColor="purple.700"
                  icon={SiCss3}
                  frameworks="Bootstrap, Tailwind, Scss, Styled Component"
                  hoverColor="purple.800"
                  language="CSS3"
                />
                <TechnologySection
                  id="html"
                  bgColor="orange.400"
                  icon={SiHtml5}
                  hoverColor="orange.500"
                  language="HTML5"
                />
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  DevOps And Version Control
                </Heading>
                <TechnologySection
                  id="docker"
                  bgColor="blue.400"
                  icon={SiDocker}
                  hoverColor="blue.600"
                  language="DOCKER"
                />
                <TechnologySection
                  id="azure"
                  bgColor="blue.500"
                  icon={SiMicrosoftazure}
                  hoverColor="blue.600"
                  language="AZURE"
                />
                <TechnologySection
                  id="git"
                  bgColor="red.300"
                  icon={SiGit}
                  hoverColor="red.400"
                  language="GIT"
                />
                <Heading as="h3" fontSize={17.5} mb={6} variant="section-title">
                  Databases
                </Heading>
                <TechnologySection
                  id="sqlserver"
                  bgColor="blue.400"
                  icon={SiMicrosoftsqlserver}
                  hoverColor="blue.600"
                  language="SQLSERVER"
                />
                <TechnologySection
                  id="postgresql"
                  bgColor="blue.500"
                  icon={SiPostgresql}
                  hoverColor="blue.600"
                  language="POSTGRESQL"
                />
                <TechnologySection
                  id="mongodb"
                  bgColor="green.500"
                  icon={SiMongodb}
                  hoverColor="green.600"
                  language="MONGODB"
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
