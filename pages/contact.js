import React, { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function Contact() {
  // State for button text and loading status
  const [buttonText, setButtonText] = useState('Submit')
  const [isLoading, setIsLoading] = useState(false)

  // Form State
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Standardized change handler
  const handleChange = e => {
    const { name, value } = e.target
    setQuery(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const formSubmit = async e => {
    e.preventDefault()
    setIsLoading(true) // 1. Start Spinner

    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      await fetch('https://getform.io/f/f64821c8-cafb-4ceb-9bd5-48bcaec234f9', {
        method: 'POST',
        body: formData
      })

      // 2. Clear form on success
      setQuery({ name: '', email: '', message: '' })
      setButtonText('Submitted!')

      // Reset button text after 2 seconds
      setTimeout(() => {
        setButtonText('Submit')
      }, 2000)
    } catch (err) {
      console.error(err)
      setButtonText('Failed, try again.')
    } finally {
      setIsLoading(false) // 3. Stop Spinner
    }
  }

  return (
    <Layout title="Contact">
      <Container>
        <Flex width="full" align="center" justifyContent="center">
          <Box p={2}>
            <Box textAlign="center">
              <Heading
                as="h2"
                variant="page-title"
                bgGradient="linear(to-l, #79c2ff, #4a5888)"
                bgClip="text"
              >
                CONTACT
              </Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={formSubmit}>
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={query.name}
                    onChange={handleChange}
                    borderWidth="medium"
                    borderColor="teal"
                    bg="transparent"
                    fontWeight="black"
                    color="teal"
                    _hover={{ borderColor: 'teal.400' }}
                  />
                </FormControl>

                <FormControl mt={6} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={query.email}
                    onChange={handleChange}
                    borderWidth="medium"
                    borderColor="teal"
                    bg="transparent"
                    fontWeight="black"
                    color="teal"
                    _hover={{ borderColor: 'teal.400' }}
                  />
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Message</FormLabel>
                  <Input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    value={query.message}
                    onChange={handleChange}
                    borderWidth="medium"
                    borderColor="teal"
                    bg="transparent"
                    fontWeight="black"
                    color="teal"
                    _hover={{ borderColor: 'teal.400' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  width="full"
                  mt={4}
                  isLoading={isLoading} // ✅ Shows spinner
                  loadingText="Submitting"
                >
                  {buttonText}
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'
