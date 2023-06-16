import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, ProjectImage, Meta } from '../../components/projects/projectInfo'
  import P from '../../components/styles/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Project = () => (
    <Layout title="NumbersInString">
      <Container>
        <Title>
          Numbers In String <Badge>2021-</Badge>
        </Title>
        <P>
          A meetup application for dog and dog owners to chat, like and share interests.
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
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>.Net C#, Console Application</span>
          </ListItem>
          <ListItem>
            <Meta>Agile Tools</Meta>
               
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/berraCinemaApp.png" alt="Inkdrop" />
        <ProjectImage src="/images/projects/HamsterWarApp.png" alt="Inkdrop" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/XjkHDbAt5kc?controls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/projects/chakra'