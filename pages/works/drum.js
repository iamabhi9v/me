import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="DrumKit® Company">
    <Container>
      <Title>
        DrumKit® Company <Badge>2020</Badge>
      </Title>
      <P>
        This website is about the virtual drumkit experience. The drum kit, also
        called &quot;the drums,&quot; is a group of percussion instruments
        arranged so that they can be played by one person. The basic drum kit is
        comprised of any number of other percussion instruments, but primarily
        of large and small drums and cymbals, with the special tonal qualities
        of each being used in a performance.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://drumkitcompany.github.io/main/">
            https://drumkitcompany.github.io/main/
            <ExternalLinkIcon mx="2px" />
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

      <WorkImage
        src="/images/works/drumkitcompany1.png"
        alt="DrumKit Company"
      />
      <WorkImage
        src="/images/works/drumkitcompany2.png"
        alt="DrumKit Company"
      />
      <WorkImage
        src="/images/works/drumkitcompany3.png"
        alt="DrumKit Company"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
