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
  <Layout title="QuoteApp">
    <Container>
      <Section delay={0.2}>
        <Title>
          QuoteApp <Badge>2023-</Badge>
        </Title>
        <P>
          An Quote fetching application to store quotes that the user like on a dashboard.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/WeaveCraft/Quote-App">
              Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iPads</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>.NET/PostgreSQL/Dapper/React</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>C#/SQL/TypeScript/English/Swedish</span>
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            <span>Gitwell/Docker/Devcontainer</span>
          </ListItem>
          <ListItem>
            <Meta>IDE</Meta>
            <span>Visual Studio 2022/VS Code</span>
          </ListItem>
        </List>
        <Divider />
      </Section>
      <Section delay={0.3}>

        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Problem
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            To address the lack of inspiration, my intern-coworker and I are developing an app that will consume an external Quote-API. We will utilize a REST API, powered by React on the frontend,
            PostgreSQL as the database, and .NET Core on the backend. This app will allow users to store and retrieve quotes, providing them with a constant source of inspiration. Additionally,
            we will work closely with our customers to design a user interface that meets their specific needs and enhances the overall user experience.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Ingredients
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          .NET Core to develop the backend application.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          PostgreSQL database to store data.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          RESTful APIs using ASP.NET Web API to handle CRUD.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Dapper as an ORM tool.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          React to develop the client side application.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          HTTP to communicate with the .NET APIs controllers.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          React routing to navigate between different views.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          React features to handle data binding.
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Result
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            Working collaboratively with a coworker and a customer in an agile environment allowed us to adopt a sprint-based approach and develop the QuoteApp.
            Through weekly meetings and effective communication, we were able to understand and fulfill the customer&apos;s requirements.
            During the development process, we embraced new technologies like Devcontainer, React, and Docker. While these tools presented some challenges,
            they also provided exciting opportunities for growth. As a result, my proficiency in developing applications using React and .NET has significantly improved, and I now feel more confident in my abilities.
          </Paragraph>
        </Box>
        <ProjectImage src="/images/projects/QuoteApp-Structure.png" alt="Berra" />
      </Section>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'