import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelRoom from '../voxel-room'
import NoSsr from '../no-ssr'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Viktor Hurtig - Portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelRoom />
                </NoSsr>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main