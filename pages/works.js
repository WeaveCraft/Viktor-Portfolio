import { Container, Heading, SimpleGrid, ListItem, List, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import Paragraph from '../components/styles/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Work = () => (
    <Layout title="Works">
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4} variant="section-title">
                    Work Experiences
                </Heading>
                <Paragraph>
                    Thanks to my diverse professional background and experience across various organizations, I have gained valuable insights into the unique demands and challenges of different industries. This has equipped me with a profound understanding of their specific needs, enabling me to create more effective and tailored solutions for individuals and organizations alike.
                </Paragraph>
            </Section>

            <Divider />

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
                <BioSection>
                    <BioYear>2022 - 2023</BioYear>
                    Fullstack Internship, LearningWell AB
                </BioSection>
            </Section>

            <Divider />

            <Section delay={0.4}>
            <Heading as="h4" fontSize={30} mb={1} variant="page-title">
                Software Development
            </Heading>

                <SimpleGrid gap={6}>
                    <List>
                        <ListItem>
                            <Heading as="h3" fontSize={17.5} mb={2} variant="section-title">
                                Internship Fullstack - LearningWell AB Nyköping
                            </Heading>
                            <Paragraph>
                                I gained hands-on experience using React/TypeScript for frontend development and .NET/C# for backend development, leveraging PostgreSQL and SQL Server as databases.
                                For ORM, I utilized Dapper with SQL. Working in VS Code with Devcontainer allowed me to seamlessly set up a development environment, incorporating Vite and Docker images.
                                Upon completion, the product was deployed using CI/CD, ensuring comprehensive testing and GitWell integration.
                            </Paragraph>
                            <Divider />
                            <br />
                            <Divider />
                            <Paragraph>

                                Following an Agile approach, we held daily stand-up meetings, employed Redmine for scrum management, and maintained regular weekly meetings with the customer to ensure professional product development.
                                This was my first time working as a software developer and I faced many challenges, this experience gave me insight to work as a problem solver and get into the mindset of a developer.
                            </Paragraph>

                            <Divider />

                            <Heading as="h3" fontSize={16.5} mb={2} variant="section-title">
                                Self Reflection
                            </Heading>

                            <Paragraph>
                                I have developed a strong aptitude for problem-solving, finding effective solutions, and seeing projects through to completion.
                                When faced with a problem, I thrive on diving deep into its intricacies, meticulously analyzing its root causes.
                                I am proactive in researching and exploring potential solutions, often leveraging the vast resources available through online platforms like Google.
                            </Paragraph>
                            <Divider />
                            <br />
                            <Divider />
                            <Paragraph>
                                Additionally, I value the collaborative aspect of problem-solving and am open to discussing challenges with coworkers and friends, seeking their insights to arrive at the best possible resolution.
                                However, I always strive to approach problems independently at first, investing my best efforts to fully comprehend the issue before seeking assistance.
                                This approach allows me to grasp the problem comprehensively and enhances my overall understanding.
                            </Paragraph>
                            <Divider />
                            <br />
                            <Divider />
                            <Paragraph>
                                I continuously invest in my professional growth by engaging in self-learning, attending relevant training, and staying up to date with the latest industry trends.
                                I believe in breaking down complex problems into manageable components, applying analytical skills to assess different approaches, and selecting the most suitable solution.
                                Additionally, I embrace adaptability and flexibility, readily adapting to changing project requirements and learning new technologies when needed.
                            </Paragraph>
                        </ListItem>
                    </List>
                </SimpleGrid>
            </Section>

            <Divider />

            <Heading as="h4" fontSize={30} mb={1} variant="page-title">
                Utilizing Software Tools
            </Heading>

            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <List>
                        <ListItem>
                            <Heading as="h3" fontSize={17.5} mb={2} variant="section-title">
                                Telephone Operator
                            </Heading>
                            <Paragraph>
                                Demonstrated proficiency in using the software required for call management.
                            </Paragraph>

                            <Heading as="h3" fontSize={17.5} mb={2} variant="section-title">
                                Sports Center
                            </Heading>
                            <Paragraph>
                                Booked events and assisted in organizing them. Utilized specialized software for event management and booking.
                            </Paragraph>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <Heading as="h3" fontSize={17.5} mb={2} variant="section-title">
                                Airport Security
                            </Heading>
                            <Paragraph>
                                Managed CCTV software with an alarm system. Demonstrated proficiency and expertise in working with various software systems.
                                Utilized software to report and communicate with customers regarding incidents.
                                Handled patrolling and CCTV operations.
                            </Paragraph>
                        </ListItem>
                    </List>
                </SimpleGrid>
            </Section>

            <Divider />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../components/chakra'
