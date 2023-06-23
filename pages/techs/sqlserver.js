import { SiMicrosoftsqlserver, SiUdemy } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const SqlServerTech = () => {
  return (
    <Layout title="SqlServer">
      <TechSection
        title="SQLSERVER"
        color="#4299E1"
        icon={<SiMicrosoftsqlserver />}
        backButtonHref="/techs"
        proficiencyLevel="Intermediate"
        proficiencyText="I have dedicated my focus to Microsoft SDK, which includes SQL Server as a key component in software development. 
        By extensively utilizing SQL Server, I have gained valuable experience in designing, developing, and managing software applications that rely on robust and efficient database systems."
        learningJourney="Throughout my studies, I have extensively used SQL Server in conjunction with SSMS (SQL Server Management Studio). 
        This continuous hands-on experience has allowed me to develop a strong foundation and proficiency in working with SQL Server as a database."
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
            description: 'WinForms_WeatherDB',
            githubLink: 'https://github.com/WeaveCraft/WinForms_WeatherDB',
          },
          {
            description: 'Prague_Parking2.0',
            githubLink: 'https://github.com/WeaveCraft/Prague_Parking2.0',
          },
        ]}
      />
    </Layout>
  );
};

export default SqlServerTech;
