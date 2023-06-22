import { SiCsswizardry, SiUdemy, SiYoutube } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const CssTech = () => {
  return (
    <Layout id="css">
      <TechSection
        title="CSS"
        color="#553C9A"
        icon={<SiCsswizardry />}
        backButtonHref="/techs"
        proficiencyLevel="Intermediate"
        proficiencyText="I am sufficient implementing complex layouts, applying styling to different elements, and managing the visual presentation of a website.  
        I have a good grasp of CSS selectors, specificity, and cascading rules, enabling them to effectively style and target specific elements on a page."
        learningJourney="Through my educational journey and various web application projects, I have honed my skills in styling and creating visually appealing web applications.
         I am proficient in utilizing a range of tools and frameworks, including SCSS, Tailwind CSS, Styled Components, and Bootstrap."
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
        
        ]}
        projects={[
          {
            description: 'PetPal',
            githubLink: 'https://github.com/WeaveCraft/PetPal',
          },
          {
            description: 'BerrasCinema',
            githubLink: 'https://github.com/WeaveCraft/BerraCinema',
          },
          {
            description: 'HamsterWar',
            githubLink: 'https://github.com/WeaveCraft/HamsterWar',
          },
          {
            description: 'Simple-Calculator',
            githubLink: 'https://github.com/WeaveCraft/Simple-Calculator',
          },
          {
            description: 'xUnit_YlvasKaffeLager',
            githubLink: 'https://github.com/WeaveCraft/xUnit_YlvasKaffeLager',
          },
          {
            description: 'WinForms_WeatherDB',
            githubLink: 'https://github.com/WeaveCraft/WinForms_WeatherDB',
          },
          {
            description: 'Prague_Parking2.0',
            githubLink: 'https://github.com/WeaveCraft/Prague_Parking2.0',
          },
          {
            description: 'MiFamilia',
            githubLink: 'https://github.com/WeaveCraft/Mifamilia',
          },
          {
            description: 'Minimal_portfolio',
            githubLink: 'https://github.com/WeaveCraft/minimal_portfolio',
          },
          {
            description: 'React_Dashboard',
            githubLink: 'https://github.com/WeaveCraft/React_Dashboard',
          },
        ]}
      />
    </Layout>
  );
};

export default CssTech;
