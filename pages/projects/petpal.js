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
  <Layout title="PetPal">
    <Container>
      <Title>
        PetPal <Badge>2023-</Badge>
      </Title>
      <P>
        A meetup application for dog and dog owners to chat, like and share interests.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/PetPal">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET/SQL Server/Angular 2</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#/T-SQL/TypeScript/English</span>
        </ListItem>
        <ListItem>
          <Meta>IDE</Meta>
          <span>Visual Studio 2022/VS Code</span>
        </ListItem>
      </List>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
      Ingredients
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
          Recently, there has been an increase in the number of dog owners, highlighting the growing need for a platform that facilitates networking and collaboration among them.
          Recognizing this need, I have realized the importance of creating a space where dog owners can connect, share their experiences, and support one another.
          By fostering a community-driven environment, I aim to promote knowledge sharing, friendship formation, and ultimately improve the well-being of both dogs and their owners.
        </Paragraph>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Solution
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          .NET Core to develop the backend application.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          SQL Server database to store data related to dog owners.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          RESTful APIs using ASP.NET Web API to handle CRUD.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Entity Framework as an ORM tool.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          Angular 2 to develop the client side application.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          HTTP to communicate with the .NET APIs controllers.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          Angular routing to navigate between different views.
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          Angular features to handle data binding.
        </BioSection>
      </Section>


      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Result
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        The combined result of the backend and frontend implementation made it to be a functional meeting web app for dog owners.
         This app allows dog owners to connect, share information, and organize meetings or events related to their dogs. 
         Users would be able to create profiles, search for other dog owners, chat and like other users, and interact with the community of dog owners through the app's user interface.
        </Paragraph>
      </Box>

      <ProjectImage src="/images/projects/PetPal-Structure.png" alt="Berra" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'