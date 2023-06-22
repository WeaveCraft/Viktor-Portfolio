import { Container, Heading, SimpleGrid, ListItem, List } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { Box } from '@chakra-ui/layout'
import Paragraph from '../components/styles/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Work = () => (
    <Layout title="Posts">
        <Container>
            <Section delay={0.2}>
            <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                Work Experiences
            </Heading>
            <Paragraph>
                Thanks to my diverse professional background and experience across various organizations, I have gained valuable insights into the unique demands and challenges of different industries.
                This has equipped me with a profound understanding of their specific needs, enabling me to create more effective and tailored solutions for individuals and organizations alike.
            </Paragraph>
            </Section>
            
            <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Work Bio
            </Heading>
            <BioSection>
                <BioYear>2011 - 2011</BioYear>
            Warehousing Service, XL Bygg.
            </BioSection>
            <BioSection>
                <BioYear>2012 - 2012</BioYear>
             Care Assistant, Nyköing Hospital.
            </BioSection>
            <BioSection>
                <BioYear>2013 - 2013</BioYear>
            Salesman H&M, Colechester.
            </BioSection>
            <BioSection>
                <BioYear>2014 - 2015</BioYear>
            Telephone Operator, Nyköping City Hall.
            </BioSection>
            <BioSection>
                <BioYear>2016 - 2016</BioYear>
                Communications & Booking Manager, Sports Center
            </BioSection>
            <BioSection>
                <BioYear>2017 - 2017</BioYear>
            Industrial Worker, SSAB.
            </BioSection>
            <BioSection>
                <BioYear>2018 - 2023</BioYear>
            Airport Security, Skavsta.
            </BioSection>
            </Section>
            <Section delay={0.4}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <List>
                        <ListItem>
                            <Box alignSelf="center" px="21" py="4">
                                <Heading as="h3" fontSize={17.5} mb={2} variant="section-title">
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

export default Work
export { getServerSideProps } from '../components/chakra'
