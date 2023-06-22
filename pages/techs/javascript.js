import { SiJavascript, SiYoutube } from 'react-icons/si';
import Layout from '../../components/layouts/article';
import TechSection from '../../components/techSection';

const JavascriptTech = () => {
    return (
        <Layout id="javascript">
            <TechSection
                title="JAVASCRIPT"
                color="#ECC94B"
                icon={<SiJavascript />}
                backButtonHref="/techs"
                proficiencyLevel="Novice"
                proficiencyText="My proficiency level can be assessed by evaluating the user experience of this website, which I believe falls within the novice/intermediate range."
                learningJourney="Working with JavaScript has been an enjoyable and rewarding experience for me.
         It served as the foundation for developing this website using React and Next.js! Leveraging the versatility and dynamic nature of JavaScript, I was able to create interactive and responsive user interfaces."
                references={[
                    {
                        label: '@LamaDev',
                        link: 'https://www.youtube.com/watch?v=yKV1IGahXqA&t=5919s&ab_channel=LamaDev',
                        icon: <SiYoutube />
                    },

                ]}
                projects={[
                    {
                        description: 'Viktor-Portfolio',
                        githubLink: 'https://github.com/WeaveCraft/Viktor-Portfolio',
                    },
                    {
                        description: 'Minimal_Portfolio',
                        githubLink: 'https://github.com/WeaveCraft/minimal_portfolio',
                    },
                    {
                        description: 'React_Dashboard',
                        githubLink: 'https://github.com/WeaveCraft/React_Dashboard',
                    },
                    {
                        description: 'MiFamilia',
                        githubLink: 'https://github.com/WeaveCraft/Mifamilia',
                    },
                ]}
            />
        </Layout>
    );
};

export default JavascriptTech;
