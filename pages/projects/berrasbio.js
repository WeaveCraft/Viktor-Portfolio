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

const Project = () => (
  <Layout title="BerrasBio">
    <Container>
      <Title>
        BerrasBio <Badge>2022-</Badge>
      </Title>
      <P>
        A meetup application for dog and dog owners to chat, like and share interests.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/WeaveCraft/BerrasBio">
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET/C#/Razor Pages/SQL Server/T-SQL</span>
        </ListItem>
      </List>

      <Divider />

      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Problem
      </Heading>
      <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
        <Paragraph>
          Lately more dog owners has been appearing, therefore I have seen the need of someway to broaden the way to network with other dog owners to share their struggles and join together to create a network for sharing knowledge and help dogs aswell as their owners to become friends with others.
        </Paragraph>
      </Box>

      <ProjectImage src="/images/projects/PetPal-Structure.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'