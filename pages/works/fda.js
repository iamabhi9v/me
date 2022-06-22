import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';

const Work = () => (
  <Layout title="Food Delivery App">
    <Container>
      <Title>
        Food Delivery App <Badge>2021</Badge>
      </Title>
      <P>
        Food delivery applications empower customers to look through a summary of restaurants and select the food from the app. Once customers pick their order, it gives them various mediums to pay for the same. The restaurant then accepts the order and packs it as indicated by the prerequisites given.
      </P>
      <UnorderedList my={4}>
        <ListItem>Sushi shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Quick Order and Cancellation</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/ReactNativeKit/FDA_CodePush">
            https://github.com/ReactNativeKit/FDA_CodePush<ExternalLinkIcon mx="2px" />
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
          <span>React Native CLI, VsCode, Google API, Git Bash</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/FDA1.png" alt="Food Delivery App" />
        <WorkImage src="/images/works/FDA2.png" alt="Food Delivery App" />
        <WorkImage src="/images/works/FDA3.png" alt="wFood Delivery App" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra';