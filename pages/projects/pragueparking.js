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
  <Layout title="PragueParking">
    <Container>
      <Section delay={0.2}>
        <Title>
          Prague Parking <Badge>2021-</Badge>
        </Title>
        <P>
          WinForms application to see and park cars in a parking house located in Prague.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/WeaveCraft/Prague_Parking2.0">
              Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>.NET/XML/SQL Server/Entity Framework</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>C#/T-SQL/English/Swedish(UI)/English(Code)</span>
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
          Problem
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            A new parking system is required for an indoor parking house in Prague. The system's primary purpose is to efficiently monitor the number of vehicles parked inside the facility, including motorcycles, cars, and others.
            Additionally, the system needs to determine the price for each vehicle based on its size and provide an accurate payment calculation when the vehicle is ready to leave.
          </Paragraph>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Ingredients
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          Build with .NET Core.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          SQL Server database to store data.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          XML to serialize/deserialize data.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Entity Framework Core as an ORM tool.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          Implement WinForms as GUI.
        </BioSection>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Result
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            For XML serialization and deserialization, I made use of the XML serializer provided by .NET. This serializer allows objects to be converted to XML format for storage or transmission, and vice versa.
            By applying the XML serializer, I was able to convert the EF Core entities to XML representation when storing the data and deserialize XML data back to entities when retrieving the data. <br />
            To integrate EF Core with the XML serializer, I implemented custom logic to handle the serialization and deserialization process.
            I defined additional properties or methods in the EF Core entities to facilitate the conversion to and from XML format. This way, when saving the entities to the database,
            I would first convert the necessary data to XML using the XML serializer before persisting it. Similarly, when retrieving data from the database, I would deserialize the XML data back to the corresponding entities using the XML serializer.
          </Paragraph>
        </Box>
        <ProjectImage src="/images/projects/PragueParking-Structure.png" alt="Berra" />
      </Section>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'