import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';

const Work = () => (
  <Layout title="GameZone">
    <Container>
      <Title>
        GameZone <Badge>2021</Badge>
      </Title>
      <P>
        GameZone is a game review app where users can add and review various video games, and also add ratings to them.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ReactNativeKit/GameZone">
            https://github.com/ReactNativeKit/GameZone<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Languages/Library</Meta>
          <span>React Native, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Technology</Meta>
          <span>Expo CLI, VsCode, Git Bash, Android Studio, Xcode</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/GM1.png" alt="GameZone" />
        <WorkImage src="/images/works/GM2.png" alt="GameZone" />
        <WorkImage src="/images/works/GM3.png" alt="GameZone" />
        <WorkImage src="/images/works/GM4.png" alt="GameZone" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra';