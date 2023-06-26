import { Flex, Text, Box, LinkBox } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { Meta } from '../projectInfo'
import styled from '@emotion/styled'
import NextLink from 'next/link'

const Line = styled(Box)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 50%;
  height: 2px;
  background: darkgray;
  transform: translateY(-50%);
`

const Bar = styled(Box)`
  position: absolute;
  top: 0;
  right: -8.5rem;
  height: 100%;
  width: 2px;
  background: darkgray;
`

const LanguageText = styled(Text)`
  position: absolute;
  top: 50%;
  right: -8.5rem;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: upright;
`

const FrameworkText = styled('div')`
padding: 0.5rem;
`

const TechSquare = ({
  bgColor,
  icon,
  frameworks,
  hoverColor,
  id,
  title,
  language,
}) => (
  <LinkBox as={NextLink} href={`/techs/${id}`} scroll={false} cursor="pointer">
    <Flex
      rounded="xl"
      direction="column"
      mt={4}
      bg={bgColor}
      h="25vh"
      w="25vh"
      justify="flex-end"
      _hover={{ bg: hoverColor }}
      position="relative"
      alt={title}
    >
      <Flex position="absolute" top={0} left={0} p={4}>
        <Icon as={icon} w={16} h={16} color="white" />
      </Flex>


        {frameworks && (
          <Meta>Frameworks:</Meta>
        )}
      <FrameworkText color="white" p="4" fontSize="xl" fontWeight="semibold">
        <Line />
        <span style={{ fontSize: 'small' }}>{frameworks}</span>
      </FrameworkText>
    <Bar />
    <LanguageText>{language}</LanguageText>
    </Flex>

  </LinkBox>
);

export default TechSquare;
