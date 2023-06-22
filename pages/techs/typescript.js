import { SiTypescript, SiUdemy  } from 'react-icons/si'
import Layout from '../../components/layouts/article'
import TechSection from '../../components/techSection'

const TypescriptTech = () => {
  return (
    <Layout id="typescript">
      <TechSection
        title="Typescript"
        color="#2B6CB0"
        icon={<SiTypescript />}
        backButtonHref="/techs"
        proficiencyText="I am currently working on a C# project."
        learningJourney="My fafalearning journey for C# goes here."
        references={[
          { 
            label: '@100-days-of-code', 
            link: 'https://www.udemy.com/course/100-days-of-code/',
            icon: <SiUdemy />,
          },
        ]}
        projects={[
          {
            description: '100DaysCodingPython',
            githubLink: 'https://github.com/WeaveCraft/100DaysCodingPython',
            year: "2023",
          },
        ]}
      />
    </Layout>
  )
}

export default TypescriptTech
