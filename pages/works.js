import { Container, Heading, SimpleGrid, ListItem, List } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { Box } from '@chakra-ui/layout'
import { SiCsharp, SiTypescript, SiJavascript, SiPython, SiCss3, SiHtml5, SiDocker, SiGit, SiMicrosoftazure, SiPostgresql, SiMicrosoftsqlserver, SiMongodb } from 'react-icons/si'
import Paragraph from '../components/styles/paragraph'
import TechnologySection from '../components/styles/technology'

const Tech = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                Work Experiences
            </Heading>
            <Paragraph>
                Thanks to my diverse professional background and experience across various organizations, I have gained valuable insights into the unique demands and challenges of different industries.
                This has equipped me with a profound understanding of their specific needs, enabling me to create more effective and tailored solutions for individuals and organizations alike.
            </Paragraph>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <List>
                        <ListItem>
                            <Box alignSelf="center" px="21" py="4">
                                <Heading as="h3" fontSize={17.5} mb={0} variant="section-title">
                                    H&M Colchester
                                </Heading>
<Paragraph>
    Worked with clothes.
</Paragraph>
                            </Box>
                        </ListItem>
                    </List>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Tech
export { getServerSideProps } from '../components/projects/chakra'
