import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMoonlight from '../public/images/works/moonlight.png'
import thumbFda from '../public/images/works/FDA.png'
import thumbLiving from '../public/images/works/Living.png'
import thumbGamezone from '../public/images/works/GM.png'
import thumbReactquiz from '../public/images/works/reactquiz.png'
import thumbGrocerybudredux from '../public/images/works/grocerybudredux.png'
import thumbDrum from '../public/images/works/drumkitcompany.png'
import thumbDice from '../public/images/works/dicekitcompany.png'
import thumbStella from '../public/images/works/stella.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="moonlight" title="Moonlight" thumbnail={thumbMoonlight}>
          Moonlight consists of mostly sunlight reflected from the parts of the Moon's surface where the Sun's light strikes. A website with PARALLAX effect.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fda"
            title="Food Delivery App"
            thumbnail={thumbFda}
          >
            Food Delivery App based on React Native designed for iOS and Android.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="living"
            title="Living The Social Life"
            thumbnail={thumbLiving}
          >
            "Living The Social Life" is a website based on HTML and CSS.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="gamezone" thumbnail={thumbGamezone} title="GameZone App">
            An app based on Expo CLI, designed through React Native. Developed for iOS and Android.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="reactquiz"
            thumbnail={thumbReactquiz}
            title="React Quiz"
          >
            This website is about the Quiz App...
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="grocerybudredux" thumbnail={thumbGrocerybudredux} title="Grocery Bud REDUX">
            This website is about the Grocery Store...
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="drum" thumbnail={thumbDrum} title="DrumKit Company">
            This website is about the virtual drumkit experience.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="dice"
            thumbnail={thumbDice}
            title="DiceKit Company"
          >
            This website is about the virtual DICE game.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="stella" thumbnail={thumbStella} title="Stella Studio">
            It is a responsive website based on HTML and CSS only.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'