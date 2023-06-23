import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projectInfo'
import P from '../../components/styles/paragraph'
import Paragraph from '../../components/styles/paragraph'
import Layout from '../../components/layouts/article'
import { Divider } from '@chakra-ui/react'
import { BioSection, BioYear } from '../../components/bio'
import Section from '../../components/styles/section'

const Project = () => (
  <Layout title="HamsterWar">
    <Container>
      <Section delay={0.2}>
        <Title>
          Hamster War <Badge>2022-</Badge>
        </Title>
        <P>
          An ASP.NET Blazor webb application where hamsters compete over whom is the cutest.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/WeaveCraft/HamsterWar">
              Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>.NET, ASP.NET, Blazor, SQL Server, Entity Framework</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>C#/T-SQL/English</span>
          </ListItem>
          <ListItem>
            <Meta>IDE</Meta>
            <span>Visual Studio 2019</span>
          </ListItem>
        </List>
        <Divider />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Ingredients
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            During the challenging times of the pandemic, there was sign of need for some stress relief and entertainment have been increased.
            The application allows users to login and participate in a fun "battle" where two random hamsters are presented on the screen.
            The user's task is to choose the hamster they find the cutest by simply clicking on it.
            <br />
            The application features a dynamic scoreboard that keeps track of the hamsters' cuteness rankings.
            Users can view the ongoing competition and see which hamsters are currently leading the cuteness race and which ones have received fewer votes.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Solution
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          ASP.NET Core to develop the backend application.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Blazor Server API to handle CRUD.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Entity Framework as an ORM tool.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          ASP.NET Core Authentication scaffolding.
        </BioSection>
        <BioSection>
          <BioYear>Database</BioYear>
          SQL Server to store data related to cinema and users.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          Blazor WASM for UI development.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          Integrate C# into HTML & CSS.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          Bootstrap for frontend styling.
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Result
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            The development process of creating an API application using Blazor and integrating tools like Postman and Swagger proved to be challenging yet enjoyable. It provided me with valuable experience and enhanced my knowledge of the .NET stack.
            <br />Working with Postman allowed me to test and interact with the API endpoints, making it easier to validate the functionality and troubleshoot any issues.
            <br />Overall, the experience of working with these tools added to my skill set and will undoubtedly be beneficial in my future career as a developer. I look forward to utilizing them more extensively in my projects.
          </Paragraph>
        </Box>
        <ProjectImage src="/images/projects/HamsterWar-Structure.png" alt="HamsterWar" />
      </Section>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'