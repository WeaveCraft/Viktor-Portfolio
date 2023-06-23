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
      I set myself a challenge to continuously enhance my backend development skills by dedicating time every day to coding. 
      This involved either creating new smaller applications or expanding upon existing ones, ensuring a consistent learning and growth process. 
      By actively engaging in this challenge, I aimed to solidify my knowledge and expertise in backend development.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/100DaysCodingPython">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python/English</span>
        </ListItem>
        <ListItem>
          <Meta>IDE</Meta>
          <span>PyCharm</span>
        </ListItem>
      </List>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Problem
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
        I am eager to expand my development skills and explore new tools. As part of my learning journey, 
        I have decided to create small applications that mimic everyday objects or systems in my surroundings. 
        This includes objects like a coffee machine or systems like a parking system. The primary objective behind this initiative is to consistently write code, broaden my experience, and foster continuous learning. By tackling these mini projects, 
        I aim to gain practical hands-on experience, explore different technologies, and further enhance my development capabilities.
        </Paragraph>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Ingredients
        </Heading>
        <BioSection>
          <BioYear>Backend</BioYear>
          PyCharm as IDE.
        </BioSection>
        <BioSection>
          <BioYear>Backend</BioYear>
          Implement Django atleast once.
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
        By dedicating time and effort to these small application projects, I have already observed a significant increase in my expertise in backend development.
           The continuous practice has strengthened my problem-solving skills, improved my understanding of coding best practices, and enhanced my ability to tackle real-world development challenges. 
           As a result, I feel more confident and proficient in backend development, paving the way for further growth and exploration in this field.
        </Paragraph>
      </Box>
      <ProjectImage src="/images/projects/100DaysCoding.png" alt="Berra" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'