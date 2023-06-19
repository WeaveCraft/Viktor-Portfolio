import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router} style={{ background: 'black', color: 'white' }}>
                <AnimatePresence initial={true} onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }} >
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website