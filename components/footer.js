import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="sm">
      &copy; {new Date().getFullYear()} Abhinav Anand. All Rights Reserved.
    </Box>
  )
}

export default Footer;