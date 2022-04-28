import React, {useState} from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';

  export default function Contact() {

    // Button Function
    const initialState = "Submit";
    const [buttonText, setButtonText] = useState(initialState); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    
    const changeText = (text) => {
      setButtonText(text);
      setTimeout(() => setButtonText(initialState), [2000])
    }
    
    // Form Function
    const [query, setQuery] = useState({
      name: "",
      email: ""
    });

    const handleParam = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

    const formSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://getform.io/f/f64821c8-cafb-4ceb-9bd5-48bcaec234f9", {
        method: "POST",
        body: formData
      }).then(() => setQuery({ name: "", email: "", message: "" }));
    };

    return (

    <Layout title="Contact">
    <Container>

      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading as="h2"
           variant="page-title"
           bgColor="blue.400"
           bgClip="text"
           bgGradient="linear(to-l, #79c2ff, #4a5888)">CONTACT</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={formSubmit}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="info" name="name" placeholder="Full Name" className="form-control" value={query.name} onChange={handleParam()}/>
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" placeholder="Email Address" className="form-control" value={query.email} onChange={handleParam()}/>
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Message</FormLabel>
                <Input type="info" name="message" placeholder="Message" className="form-control" value={query.message} onChange={handleParam()}/>
              </FormControl>
    
              <Button onClick={() => changeText("Submitted!")} type="submit" background="teal" width="full" mt={4}>
              {buttonText}
              </Button>

            </form>
          </Box>
        </Box>
      </Flex>

    </Container>
  </Layout>
    );
  }

  export { getServerSideProps } from '../components/chakra'