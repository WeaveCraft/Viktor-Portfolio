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
  <Layout title="100DaysCoding">
    <Container>
      <Title>
        100 Days Coding With Python <Badge>2023-</Badge>
      </Title>
      <P>
        First console application built. Numbers needs to be found inside of a string, hardcoded or not.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/Find-number-in-string">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET/Console Application</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#/English</span>
        </ListItem>
      </List>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Problem
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
          Create a console application that takes a string as an argument or reads it from the console input.
          The application will search through the input string and identify all the substrings that represent numbers starting and ending with the same digit,
          without any other non-digit characters in between. For example, "3463" is a valid substring meeting the criteria, but "34363" is not because it has an additional occurrence of the digit 3.
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
          Makse use of Substring.
        </BioSection>
        <Divider my={4} />
        <BioSection>
          <BioYear>Frontend</BioYear>
          Console Application for UI.
        </BioSection>
      </Section>

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Result
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
          The result of this application is a console output that displays the original input string with the valid number substrings highlighted in a different color.
          Additionally, the application would calculate the sum of these valid number substrings and display the total.
          The marked substrings would be highlighted to indicate that they meet the criteria of starting and ending with the same digit, with no other non-digit characters in between.
          After displaying the marked substrings. <br />
          This application served as a valuable introduction to .NET and C# programming.
        </Paragraph>
      </Box>
      <ProjectImage src="/images/projects/FindNumberInStringApp.png" alt="Berra" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'