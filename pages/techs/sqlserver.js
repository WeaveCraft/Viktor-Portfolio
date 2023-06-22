import { SiMicrosoftsqlserver, SiUdemy  } from 'react-icons/si';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const CSharpTech = () => {
  return (
    <Layout id="sqlserver">
      <TechSection
        title="SQL Server"
        color="#2B6CB0"
        icon={<SiMicrosoftsqlserver />}
        backButtonHref="/techs"
        ongoingActivity="I am currently working on a C# project."
        learningJourney="My learning journey for C# goes here."
        references={[
          { 
            label: '@100-days-of-code', 
            link: 'https://www.udemy.com/course/100-days-of-code/',
            icon: <SiUdemy />,
          },
        ]}
        projects={[
          {
            description: 'HamsterWar',
            githubLink: '/projects/project1',
            year: "2023",
          },
          {
            description: 'PetPal',
            githubLink: '/projects/project2',
            year: "2023",
          },
        ]}
      />
    </Layout>
  );
};

export default CSharpTech;
