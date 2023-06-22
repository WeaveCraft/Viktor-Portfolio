import { Box } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Divider />
      <br />
      &copy; {new Date().getFullYear()} Viktor Hurtig. All Rights Reserved.
    </Box>
  )
}

export default Footer