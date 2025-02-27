import { Text, Box, VStack, Heading, Button, Center, useDisclosure } from '@chakra-ui/react';
import FormModal from './FormModal'

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <VStack>
      <Box p={2} color='teal.100'>
        <Heading size='lg'>About ecoDrips</Heading>
        <Text py={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Heading size='lg'>How It Works</Heading>
        <Text py={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text py={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Box>
      <Box p={2} color='teal.100'>
        <Heading size='lg'>The Drip</Heading>
        <Text py={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Box>
      <Center my={[0, 4]}>
        <Button onClick={onOpen} w={['10rem', '20rem']} color='#eee' p={[0, 8]} bgGradient='linear(to-r, #01281a, #316e46, #3c5e48)' _hover={{
          background: "teal.100",
          color: "#01281a",
        }}>Start Dripping</Button>
        <FormModal isOpen={isOpen} onClose={onClose} />
      </Center>
    </VStack>
  )
}
