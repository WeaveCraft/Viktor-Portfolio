import { Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { Meta } from '../projects/projectInfo';

const TechnologySection = ({ title, bgColor, icon, frameworks, projects, hoverColor }) => (
    <Flex
      rounded="xl"
      direction="column"
      mt={4}
      bg={bgColor}
      h="25vh"
      w="25vh"
      justify="flex-end"
      _hover={{ bg: hoverColor }}
    >
      <Icon as={icon} p="4" w="24" h="24" color="white" />
      <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
        <Meta>Frameworks:</Meta>
        <span style={{ fontSize: 'small' }}>{frameworks}</span>
        <Meta>Projects:</Meta>
        <span style={{ fontSize: 'small' }}>{projects}</span>
      </Text>
    </Flex>
  )

  export default TechnologySection