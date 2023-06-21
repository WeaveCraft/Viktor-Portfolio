import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, ProjectImage, Meta } from '../../components/projectInfo'
  import P from '../../components/styles/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Technologies = () => (
    <Layout id="html">
      <Container>
        <Title>
        C# <Badge>2023-</Badge>
        </Title>
        <P>
          A meetup application for dog and dog owners to chat, like and share interests.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/WeaveCraft/100DaysCodingChallenge">
              Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>
          <ListItem>
            <Meta>Agile Tools</Meta>
               
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/berraCinemaApp.png" alt="Inkdrop" />
        <ProjectImage src="/images/projects/HamsterWarApp.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Technologies
  export { getServerSideProps } from '../../components/chakra'