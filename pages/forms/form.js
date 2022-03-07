import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

  export default function Form() {

    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Newsletter</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="info" placeholder="First Name"/>
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="info" placeholder="Last Name"/>
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email Address"/>
              </FormControl>
              <Button type="submit" background="teal" width="full" mt={4}>
                Sign Up!
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }