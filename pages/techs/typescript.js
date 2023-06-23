import { SiTypescript, SiUdemy } from 'react-icons/si';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const TypescriptTech = () => {
  return (
    <Layout title="TypeScript">
      <TechSection
        title="TYPESCRIPT"
        color="#2B6CB0"
        icon={<SiTypescript />}
        backButtonHref="/techs"
        proficiencyLevel="Novice"
        proficiencyText="Transitioning from my 'native' language, C#, which is an object-oriented programming language, to TypeScript has been both enjoyable and easier to grasp. 
        TypeScript, being another OOP language, shares similar principles and concepts with C#, allowing for a smoother learning curve."
        learningJourney="Motivated by a real-world problem and driven by the opportunity to create a practical solution,
         I took on the challenge of developing a meeting place app for dog owners using Angular with TypeScript. By envisioning my friend as a potential customer, I was able to gain valuable insights and feedback throughout the development process."
        references={[
          {
            label: '@Build an app with ASPNET Core and Angular from scratch',
            link: 'https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/',
            icon: <SiUdemy />
          },
        
        ]}
        projects={[
          {
            description: 'QuoteApp',
            githubLink: 'https://github.com/WeaveCraft/Quote-App',
          },
          {
            description: 'PetPal',
            githubLink: 'https://github.com/WeaveCraft/PetPal',
          },
        ]}
      />
    </Layout>
  );
};

export default TypescriptTech;
