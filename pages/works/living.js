import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Living The Social Life">
    <Container>
      <Title>
        Living The Social Life <Badge>2021</Badge>
      </Title>
      <P>
       "Living The Social Life" is a beautiful website based on HTML and CSS. It is basically a blog website for exploration of different cultures around the world.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://iamabhi9v.github.io/livingthesocialife/">
          https://iamabhi9v.github.io/livingthesocialife/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages/Library</Meta>
          <span>HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Technology</Meta>
          <span>GitHub, VsCode, Git Bash</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/living1.png"
        alt="Living The Social Life"/>
      <WorkImage src="/images/works/living2.png" alt="Living The Social Life" />
      <WorkImage src="/images/works/living3.png" alt="Living The Social Life" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'