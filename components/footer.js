import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="sm" fontWeight={'bold'}>
      Designed by Abhinav.<Text>{'\n'}</Text>
      &copy; {new Date().getFullYear()} Abhinav Anand. All Rights Reserved.
    </Box>
  )
}

export default Footer;