import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Text
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin, IoLogoReddit, IoLogoSteam, IoLogoTwitch, IoLogoAmazon } from 'react-icons/io5';
import thumbUi from '../public/images/links/ui.png';
import thumbMoonlight from '../public/images/works/moonlight.png';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading
            variant="page-title"
            bgColor="blue.400"
            bgClip="text"
            bgGradient="linear(to-r, #7928CA, #FF0080)">
            Abhinav Anand
          </Heading>
          <p>Software Developer / Data Analyst / Actor & Film-maker / Photographer / Video Gamer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/abhinav.png"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a software developer and a passionate learner who&apos;s always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage them to solve real-life problems ✨. Apart from that I also love to guide and mentor newbies👨🏻‍💻. I&apos;m deep into Web 🕸️ Development & Data Analysis.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref={true} scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Delhi, India.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          10th at SAM International School, Delhi, India
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          12th at SAM International School, Delhi, India
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor&apos;s Program in the School of
          Egineering and  Technology at K. R. Mangalam University, Gurugram, Haryana, India.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at HCL Technologies.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Works as a Software Developer at Crownstack Technologies.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Films, Music,{' '}
          <Link href="https://steamcommunity.com/id/iamabhi9v/" target="_blank">
            Video Games
          </Link>
          , Football and
          Photography
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <Link href="https://github.com/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://facebook.com/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoFacebook />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://twitter.com/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoTwitter />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://instagram.com/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoInstagram />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/iamabhi9v/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoLinkedin />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://www.reddit.com/user/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoReddit />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://steamcommunity.com/id/iamabhi9v/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoSteam />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://www.twitch.tv/iamabhi9v" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoTwitch />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Link href="https://www.amazon.in/gp/profile/amzn1.account.AH6XTJWGIIRK2PJ7GKRNCKPLWYQQ" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<IoLogoAmazon />}
          >
            @iamabhi9v
          </Button>
        </Link>

        <Box align="center" my={4}>
          <Text fontSize={30} color="teal">
            Popular Works
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
            href="https://css3kit.github.io/UI-Components/"
            title="UI-Components"
            thumbnail={thumbUi}
          >
            An UI Component Website.
          </GridItem>
          <GridItem
            href="https://iamabhi9v.github.io/moonlight/"
            title="Moonlight"
            thumbnail={thumbMoonlight}
          >
            Moonlight website with PARALLAX effect.
          </GridItem>
        </SimpleGrid>

      </Section>
    </Container>
  </Layout>
)

export default Home;
export { getServerSideProps } from '../components/chakra';