import { SiPostgresql, SiUdemy, SiYoutube } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const PostgreSqlTech = () => {
  return (
    <Layout id="postgresql">
      <TechSection
        title="POSTGRESQL"
        color="#3182CE"
        icon={<SiPostgresql />}
        backButtonHref="/techs"
        proficiencyLevel="Novice"
        proficiencyText="
        Collaborating in a small team of two people, I gained valuable hands-on experience in building and managing data using PostgreSQL with Dapper."
        learningJourney="I had the opportunity to implement and build a database for the application QuoteApp, 
        where I worked on gathering and collecting quotes from an external API. This hands-on experience allowed me to gain practical knowledge in working with PostgreSQL and integrating it seamlessly with the application."
        references={[
          {
            label: '@LearningWell AB',
          },
        ]}
        projects={[
          {
            description: 'QuoteApp',
            githubLink: 'https://github.com/WeaveCraft/Quote-App',
          },
        ]}
      />
    </Layout>
  );
};

export default PostgreSqlTech;
