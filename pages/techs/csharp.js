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
        proficiencyText="
        As a .NET software graduate with 6+ months of work experience, I have acquired a solid foundation in the .NET framework and its key principles.
         I am proficient in programming languages such as C# and have developed a range of applications. My expertise includes working with ASP.NET for web development and handling databases.
         I possess strong problem-solving abilities and thrive in collaborative team environments. While I am in the early stages of my career, I am eager to continue expanding my knowledge and skills in .NET development."
        learningJourney="During my two-year journey studying at Campus Nyköping, I had the opportunity to develop a strong foundation in working with .NET C#. Collaborating with highly motivated classmates,
         I discovered the joy of coding in .NET C# and creating innovative IT solutions for everyday challenges. This journey sparked my enthusiasm to continue learning and led me to pursue personal hobby projects outside of school. 
         The continuous drive to learn and explore new possibilities keeps me motivated as I progress in my .NET C# development journey."
        references={[
          {
            label: '@C# Basics for Beginners: Learn C# Fundamentals by Coding',
            link: 'https://www.udemy.com/course/csharp-tutorial-for-beginners/',
            icon: <SiUdemy />
          },
          {
            label: '@ASP.NET Core Razor Pages The Complete Guide (.NET 6)',
            link: 'https://www.udemy.com/course/advanced-aspnet-core-3-razor-pages/',
            icon: <SiUdemy />
          },
          {
            label: '@Blazor Bootcamp - .NET 6 E-Commerce Web App(WASM and Server)',
            link: 'https://www.udemy.com/course/introduction-to-aspnet-core-x/',
            icon: <SiUdemy />
          },
          {
            label: '@Complete Blazor (WASM & Server) and ASP.NET API Development',
            link: 'https://www.udemy.com/course/end-to-end-aspnet-core-31-api-and-blazor-development/',
            icon: <SiUdemy />
          },
          {
            label: '@Build an app with ASPNET Core and Angular from scratch',
            link: 'https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/',
            icon: <SiUdemy />
          },
          {
            label: '@YH-Software Development .NET Campus Nyköping',
            link: 'https://campusnykoping.se/yrkeshogskola/utbildningar/systemutvecklare-net/',
            icon: <IoIosSchool />
          },
          {
            label: '@freeCodeCamp',
            link: 'https://www.youtube.com/@freecodecamp',
            icon: <SiYoutube />
          },
          {
            label: '@shadsluiter',
            link: 'https://www.youtube.com/@shadsluiter',
            icon: <SiYoutube />
          },
        ]}
        projects={[
          {
            description: 'PetPal',
            githubLink: '/projects/project1',
          },
          {
            description: 'BerrasCinema',
            githubLink: 'https://github.com/WeaveCraft/BerraCinema',
          },
          {
            description: 'HamsterWar',
            githubLink: '/projects/project2',
          },
          {
            description: 'Simple-Calculator',
            githubLink: '/projects/project2',
          },
          {
            description: 'xUnit_YlvasKaffeLager',
            githubLink: '/projects/project2',
          },
          {
            description: 'WinForms_WeatherDB',
            githubLink: '/projects/project2',
          },
          {
            description: 'Prague_Parking2.0',
            githubLink: '/projects/project2',
          },
        ]}
      />
    </Layout>
  );
};

export default CSharpTech;
