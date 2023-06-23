import { SiPython, SiUdemy } from 'react-icons/si';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const PythonTech = () => {
  return (
    <Layout title="Python">
      <TechSection
        title="PYTHON"
        color="#27567C"
        icon={<SiPython />}
        backButtonHref="/techs"
        proficiencyLevel="Beginner"
        proficiencyText="Python caught my attention due to its dynamic typing nature, where the type of a variable is determined at runtime, in contrast to C#, which is a statically typed language where the type of a variable is determined at compile time.
         This shift to Python allowed me to broaden my programming horizons and experience the flexibility and versatility that dynamic typing brings to the development process"
        learningJourney="My educational journey in Python began with the help of an amazing teacher on Udemy. Through their guidance,
         I was introduced to the language and started working with the PyCharm IDE. This combination provided me with a solid foundation and a comfortable environment to learn and practice Python programming."
        references={[
          {
            label: '@100 Days of Code: The Complete Python Pro Bootcamp for 2023',
            link: 'https://www.udemy.com/course/100-days-of-code/',
            icon: <SiUdemy />
          },
        ]}
        projects={[
          {
            description: '100DaysCodingPython',
            githubLink: 'https://github.com/WeaveCraft/100DaysCodingPython',
          },
        ]}
      />
    </Layout>
  );
};

export default PythonTech;
