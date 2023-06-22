import { SiCsharp, SiUdemy, SiYoutube } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const CSharpTech = () => {
  return (
    <Layout id="csharp">
      <TechSection
        title="CSHARP"
        color="#2F855A"
        icon={<SiCsharp />}
        backButtonHref="/techs"
        proficiencyLevel="Intermediate"
        proficiencyText=""
        learningJourney=""
        references={[
          {
            label: '@C# Basics for Beginners: Learn C# Fundamentals by Coding',
            link: 'https://www.udemy.com/course/csharp-tutorial-for-beginners/',
            icon: <SiUdemy />
          },
        
        ]}
        projects={[
          {
            description: 'PetPal',
            githubLink: '/projects/project1',
          },
        ]}
      />
    </Layout>
  );
};

export default CSharpTech;
