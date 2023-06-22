import { SiMongodb, SiUdemy } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const MongoDbTech = () => {
  return (
    <Layout id="mongodb">
      <TechSection
        title="MONGODB"
        color="#2F855A"
        icon={<SiMongodb />}
        backButtonHref="/techs"
        proficiencyLevel="Beginner"
        proficiencyText="While my exposure to MongoDB was primarily limited to the projects and assignments I worked on during my time in school, 
        I have acquired a solid foundation and a beginners level of skillset in using this database."
        learningJourney="
        During my time at school, I had the opportunity to explore and gain a foundational skillset in developing with MongoDB. 
        The experience was incredibly enjoyable, and it has sparked a strong desire to further expand my knowledge and expertise in this database technology. I am excited to continue my learning journey and explore the potential of MongoDB in depth."
        references={[
          {
            label: '@YH-Software Development .NET Campus Nyköping',
            link: 'https://campusnykoping.se/yrkeshogskola/utbildningar/systemutvecklare-net/',
            icon: <IoIosSchool />
          },
        
        ]}
        projects={[
          {
            description: 'BookstoreDb',
            githubLink: 'https://github.com/WeaveCraft/EF-Core-BookstoreDB',
          },
        ]}
      />
    </Layout>
  );
};

export default MongoDbTech;
