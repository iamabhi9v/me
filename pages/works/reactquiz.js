import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';

const Work = () => (
  <Layout title="React Quiz">
    <Container>
      <Title>
        React Quiz <Badge>2022</Badge>
      </Title>
      <P>React Quiz is a quiz app based on ReactJs and it include 10 quizes.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ReactJsKit/React_Quiz">
            https://github.com/ReactJsKit/React_Quiz<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages/Library</Meta>
          <span>ReactJs</span>
        </ListItem>
        <ListItem>
          <Meta>Technology</Meta>
          <span>VsCode, Git Bash, GitHub</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/reactquiz1.png" alt="React Quiz" />
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra';