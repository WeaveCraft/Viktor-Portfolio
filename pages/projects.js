import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/styles/section'
import { WorkGridItem } from '../components/gridItem'

import petpalImg from '../public/images/projects/PetPalApp.png'
import berracinemaImg from '../public/images/projects/BerraCinemaApp.png'
import numberinstringImg from '../public/images/projects/FindNumberInStringApp.png'
import hamsterwarImg from '../public/images/projects/HamsterWarApp.png'
import pragueparkingImg from '../public/images/projects/PragueParkingApp.png'
import quoteImg from '../public/images/projects/QuoteApp.png'
import weatherImg from '../public/images/projects/WeatherApp.png'
import hundredcodingImg from '../public/images/projects/100DaysCoding.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        ASP.NET
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="berrasbio"
            title="BerrasBio"
            thumbnail={berracinemaImg}
          >
            Razor pages cinema application to buy movie tickets. User can register with either customer role or admin role. Customer roles are only allowed to buy tickets while Admin roles can remove, add and edit movie titles.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="hamsterwar" title="HamsterWar" thumbnail={hamsterwarImg}>
            Create a Blazor Web Server application where hamsters compete to determine who is the cutest.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Fullstack
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem id="petpal" title="PetPal" thumbnail={petpalImg} >
            A .Net RestAPI in conjunction with an Angular 2 application that allows dog owners to register their pets and connect with other pet owners for friendship and networking.
            Created a meetup application for dogs to facilitate knowledge sharing and help owners become better pet caretakers.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="quoteapp"
            title="Quote App"
            thumbnail={quoteImg}
          >
            An ASP .NET application in conjunction with React, allowing users to create dashboards and add quotes to their selected dashboard for inspiration.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          WinForms
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="weatherapp" title="WeatherApp" thumbnail={weatherImg}>
            A WinForms application is designed to read data from a .csv file, which has been collected from a weather data collector.
            The application will filter out any corrupt or unreliable data from the .csv file, providing a refined and "clean" dataset as the output.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="pragueparking" title="Prague Parking" thumbnail={pragueparkingImg}>
            A WinForms application is developed for a parking house system. This application displays the current number of vehicles parked in the parking house and the corresponding price for each vehicle.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Minor Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.7}>
          <WorkGridItem id="100dayscoding" title="100DaysCoding" thumbnail={hundredcodingImg}>
            A 100 days coding challenge building minor projects with Python with PyCharm as an IDE.
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem
            id="numbersinstring"
            title="NumbersInString"
            thumbnail={numberinstringImg}
          >
            A Console application is created to read user input and generate a pattern of numbers that starts and ends with the same number. This pattern is then printed out on the console.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'