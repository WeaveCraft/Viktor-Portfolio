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
  <Layout title="BerrasBio">
    <Container>
      <Title>
        BerrasBio <Badge>2022-</Badge>
      </Title>
      <P>
        A movie booking ticket using microsofts authentication with Razor Pages.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/BerraCinema">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET, ASP.NET, Razor Pages, SQL Server, Entity Framework</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#/T-SQL/English</span>
        </ListItem>
      </List>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Problem
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        A cinema is undergoing a rebranding process and requires a new web application to facilitate online movie ticket bookings for users. 
        Additionally, the company intends to provide administrators with the ability to create accounts and perform CRUD operations for managing active movies.
        </Paragraph>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Ingredients
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          .NET Core to develop the backend application.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          RESTful APIs using Razor pages to handle CRUD.
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
          Razor pages together with MVC framework.
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


      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Result
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        Overall, the result is a robust and user-centric web application that caters to both customers and cinema administrators. 
        It simplifies the movie ticket booking process, improves operational efficiency for the cinema, and enhances the overall movie-going experience for users.
        </Paragraph>
      </Box>

      <ProjectImage src="/images/projects/Berra-Structure.png" alt="Berra" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'