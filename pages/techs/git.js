import { SiGit, SiUdemy } from 'react-icons/si';
import { IoIosSchool } from 'react-icons/io';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const GitTech = () => {
  return (
    <Layout title="Git">
      <TechSection
        title="GIT"
        color="#F56565"
        icon={<SiGit />}
        backButtonHref="/techs"
        proficiencyLevel="Intermediate"
        proficiencyText="Git has become an indispensable tool in my daily workflow as a developer. Its usage has allowed me to maintain a well-organized and structured codebase while providing valuable version control capabilities."
        learningJourney="During my educational journey, I recognized the significance of Git as a version control system and began using it. 
        However, it was during my second internship at LearningWell, where I collaborated with a small team of four individuals, that I truly delved into the intricacies of Git and its role in effective version control.
        Working alongside experienced professionals, I gained a deeper understanding of Git's capabilities and its impact on collaborative software development.
        Through hands-on experience, I became proficient in utilizing Git for branching, merging, and resolving conflicts, enabling seamless collaboration within our team."
        references={[
          {
            label: '@YH-Software Development .NET Campus Nyköping',
            link: 'https://campusnykoping.se/yrkeshogskola/utbildningar/systemutvecklare-net/',
            icon: <IoIosSchool />
          },
        
        ]}
        projects={[
          {
            description: '*',
            githubLink: 'https://github.com/WeaveCraft?tab=repositories',
          },
        ]}
      />
    </Layout>
  );
};

export default GitTech;
