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
  <Layout title="Grocery Bud REDUX">
    <Container>
      <Title>
        Grocery Bud REDUX <Badge>2022</Badge>
      </Title>
      <P>
        It is a Grocery Bud Website based on ReactJs as well as REDUX. In this website users can add, edit and delete items. 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ReactJsKit/GroceryBud-REDUX">
          https://github.com/ReactJsKit/GroceryBud-REDUX<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages/Library</Meta>
          <span>ReactJs, REDUX</span>
          </ListItem>
          <ListItem>
          <Meta>Technology</Meta>
          <span>Git Bash, VsCode, GitHub</span>
          </ListItem>
      </List>

      <WorkImage src="/images/works/grocerybudredux1.png" alt="Grocery Bud REDUX" />
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra';