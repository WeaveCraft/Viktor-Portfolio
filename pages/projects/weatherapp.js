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
  <Layout title="WeatherApp">
    <Container>
      <Title>
      WeatherApp <Badge>2022-</Badge>
      </Title>
      <P>
        WinForms application to collect weather data from CSV file and store into a database (SQL Server) and clean the data to be displayed for user.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/WinForms_WeatherDB">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET/WinForms/SQL Server/Entity Framework</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#/T-SQL/Swedish(UI)/English(Code)</span>
        </ListItem>
        <ListItem>
          <Meta>IDE</Meta>
          <span>Visual Studio 2019</span>
        </ListItem>
      </List>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Problem
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        Develop an application that can effectively handle and analyze temperature and humidity data. The application should provide functionalities such as searching, sorting, and drawing conclusions based on the data. 
        The goal is to create a user-friendly interface that allows users to interact with the data and retrieve meaningful insights. 
        Additionally, the application should automate the process of database creation and data population to ensure seamless data management.
        </Paragraph>
      </Box>

      <Section delay={0.2}>
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
          Entity Framework Core as an ORM tool.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          XML to serialize/deserialize data.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Read from .csv file using StreamReader.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          Implement WinForms as GUI.
        </BioSection>
      </Section>

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Result
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        The application automatically creates the necessary database if it doesn't already exist. It utilizes Entity Framework and follows the Code First approach for database creation. <br />
        The application reads data from the "TempFuktData.csv" file and populates the database with the relevant temperature and humidity data. <br />
        Users can view outdoor and indoor temperature and humidity data based on selected dates. They can also sort the data based on different criteria, such as the warmest to coldest day, driest to most humid day, or least to highest risk for mold. <br />
        The application calculates and presents aggregated data, such as average temperature and humidity per day, enabling users to analyze trends and patterns.
        </Paragraph>
      </Box>

      <ProjectImage src="/images/projects/WeatherApp-Structure.png" alt="Berra" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'