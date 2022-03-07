import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Stella Studio">
    <Container>
      <Title>
        Stella Studio <Badge>2020</Badge>
      </Title>
      <P>
        Stella Studio is a website which is based on HTML and CSS only. This website is fully responsive.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://iamabhi9v.github.io/stellastudio/">
          https://iamabhi9v.github.io/stellastudio/ <ExternalLinkIcon mx="2px" />
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
          <span>Git Bash, NodeJs, Atom</span>
        </ListItem>
        </List>

        <WorkImage src="/images/works/stella1.png" alt="Stella Studio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'