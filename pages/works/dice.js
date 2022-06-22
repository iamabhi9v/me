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
  <Layout title="DiceKit® Company">
    <Container>
      <Title>
        DiceKit® Company <Badge>2020</Badge>
      </Title>
      <P>
        This website is about the virtual DICE game experience.
        Dice are small, throwable objects with marked sides that can rest in multiple positions. They are used for generating random numbers, commonly as part of tabletop games, including dice games, board games, role-playing games, and games of chance. A traditional die is a cube with each of its six faces marked with a different number of dots (pips) from one to six.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/dicekitcompany/main">
            https://github.com/dicekitcompany/main<ExternalLinkIcon mx="2px" />
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
          <span>Atom, Git Bash, NodeJs</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dicekitcompany1.png" alt="DiceKit Company" />
      <WorkImage src="/images/works/dicekitcompany2.png" alt="DiceKit Company" />
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra';