import { SiDocker, SiUdemy } from 'react-icons/si';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const DockerTech = () => {
  return (
    <Layout id="csharp">
      <TechSection
        title="DOCKER"
        color="#4299E1"
        icon={<SiDocker />}
        backButtonHref="/techs"
        proficiencyLevel="Intermediate"
        proficiencyText="During my experience working collaboratively with a small team of four individuals, we successfully utilized Docker images and Devcontainer to deploy a fully functional website. This hands-on involvement allowed me to gain valuable insights into the setup and configuration of development environments."
        learningJourney="During my 7-month internship at LearningWell, I had the opportunity to enhance my skills in deploying and working with Docker and Devcontainers, alongside technologies such as React, TypeScript, and .NET C#.
         My experience working with Docker sparked a strong interest and curiosity in me, motivating me to continue learning and exploring its capabilities. As a result, I took the initiative to invest in my professional development by enrolling in an online course on Docker and Kubernetes available on Udemy"
        references={[
          {
            label: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
            link: 'https://www.udemy.com/course/docker-mastery/',
            icon: <SiUdemy />
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

export default DockerTech;
