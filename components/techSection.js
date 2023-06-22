import { Container, Box, Heading, Link, Button, List, ListItem, Text, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Section from './styles/section';
import Paragraph from './styles/paragraph';
import NextLink from 'next/link';
import { BioSection, BioYear } from './bio';

const TechSection = ({ title, color, icon, backButtonHref, proficiencyLevel, proficiencyText, learningJourney, references, projects }) => {
  return (
    <Container>
      <Box borderRadius="lg" bg="#363636" p={3} mb={6} align="center">
        <span style={{ color: '#3B6A96' }}>SELECT</span>
        <span style={{ color: 'white' }}> *</span>
        <span style={{ color: '#3B6A96' }}> FROM</span>
        <span style={{ color: 'white' }}> My.Repo</span> <br />
        <span style={{ color: '#3B6A96' }}>WHERE</span>
        <span style={{ color: 'white' }}> Repo</span>
        <span style={{ color: '#3B6A96' }}> CONTAINS</span>
        <span style={{ color: 'white' }}> '{title}'</span>
      </Box>
      <Section delay={0.2}>
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title" color={color} style={{ fontSize: '4rem' }}>
            {icon}
          </Heading>
        </Box>
        <Button as={NextLink} variant="ghost" colorScheme="blue" leftIcon={<ChevronLeftIcon />} href={backButtonHref} mr={2}>
          Take Me Back
        </Button>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Proficiency Level - {proficiencyLevel}
        </Heading>
        <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
          <Paragraph>
            {proficiencyText}
          </Paragraph>
        </Box>

        
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Educational Journey
          </Heading>
          <Box borderRadius="lg" bg="#363636" p={4} mb={8} color="white">
            <Paragraph>
              {learningJourney}
            </Paragraph>
          </Box>
          {references && (
            <>
              <Heading as="h3" variant="section-title">
                Reliable References
              </Heading>
              <List>
                {references.map((reference, index) => (
                  <ListItem key={index}>
                    <Link href={reference.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        colorScheme="teal"
                        leftIcon={reference.icon}
                      >
                        {reference.label}
                      </Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          {projects && (
            <>
              {projects.map((project, index) => (
                <Box key={index} my={1}>
                  <Heading as="h4" variant="section-subtitle" color={color}>
                    {project.title}
                  </Heading>
                  <BioSection>
                    {/* BioSection is component reused to display Year with a comment.
                    It's originally created for index.js page but is reintroduced here. */}
                    <BioYear>{project.year}</BioYear>
                    <Link as={NextLink} href={project.githubLink} passHref scroll={false}>
                      {project.description}
                    </Link>
                  </BioSection>
                </Box>
              ))}
            </>
          )}
        </Section>
      </Section>
    </Container>
  );
};

export default TechSection;
