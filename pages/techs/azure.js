import { SiMicrosoftazure, SiYoutube } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const AzureTech = () => {
  return (
    <Layout id="azure">
      <TechSection
        title="Azure"
        color="#2B6CB0"
        icon={<SiMicrosoftazure />}
        backButtonHref="/techs"
        proficiencyLevel="Beginner"
        proficiencyText="
        Through my involvement in the development of my school project 'xUnit_YlvasKaffeLager', 
        I gained valuable experience working with Azure CI/CD and its repositories. 
         The hands-on experience with Azure Services has equipped me with the necessary skills to confidently navigate and leverage its capabilities in future projects."
        learningJourney="During my course on Clean Code and Test-Driven Development (TDD) at Campus Nyköping, 
        I had the opportunity to work with and deploy applications using Azure. This experience provided me with a solid foundation in deploying and working with Azure services."
        references={[
          {
            label: '@YH-Software Development .NET Campus Nyköping',
            link: 'https://campusnykoping.se/yrkeshogskola/utbildningar/systemutvecklare-net/',
            icon: <IoIosSchool />
          },
          {
            label: '@freeCodeCamp',
            link: ' https://www.youtube.com/watch?v=NKEFWyqJ5XA&ab_channel=freeCodeCamp.org',
            icon: <SiYoutube />
          },
         
        ]}
        projects={[
          {
            description: 'xUnit/TDD - Ylvas Kaffelager',
            githubLink: 'https://github.com/WeaveCraft/xUnit_YlvasKaffeLager',
          },
        ]}
      />
    </Layout>
  );
};

export default AzureTech;
