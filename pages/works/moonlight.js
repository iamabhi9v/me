import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Moonlight">
    <Container>
      <Title>
        Moonlight <Badge>2021-</Badge>
      </Title>
      <P>
      Moonlight consists of mostly sunlight (with little earthlight) reflected from the parts of the Moon&apos;s surface where the Sun&apos;s light strikes.
      Parallax scrolling is a web design technique in which the website background moves at a slower pace than the foreground. This results in a 3D effect as visitors scroll down the site, adding a sense of depth and creating a more immersive browsing experience.
      Parallax is based on optical illusion.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://iamabhi9v.github.io/moonlight/">
          https://iamabhi9v.github.io/moonlight/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages/Library</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Technology</Meta>
          <span>Atom, GitHub, NodeJs, Git Bash</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/moonlight1.png" alt="Moonlight" />
      <WorkImage src="/images/works/moonlight2.png" alt="Moonlight" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'