import { Container, Flex, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AboutUsSection } from '../components/AboutUsSection'
import { AdvantagesSection } from '../components/AdvantagesSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import Slick from '../components/Slick'
import { SoluctionSection } from '../components/SoluctionsSection'

export default function Home<NextPage> () {
  return (
    <>
      <Navbar />
      
      <Flex width='100%' height='920px' position='relative' bg='blue.500'>
        <HeroSection />
      </Flex>

      <Flex width='100%' minHeight='900px' height='100%' position='relative' bg='gray.50'>
        <SoluctionSection />
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='500px' height='100%' position='relative' bg='blue.500'>
        <FeaturesSection />
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='900px' height='100%' position='relative' bg='gray.50'>
        <AdvantagesSection isReverseSectionContent/>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='900px' height='100%' position='relative' bg='blue.500'>
        <AdvantagesSection />
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='500px' height='100%' position='relative' bg='gray.50'>
        <Container display='flex' flexDirection='column' maxW={'8xl'} px={{ base: '10px', md: 24 }}>
          <Heading color='gray.700' textAlign='center' mb='14'>Nossos clientes e parceiros</Heading>

            <Slick />
        </Container>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='600px' height='100%' position='relative' bg='blue.500'>
        <AboutUsSection />
      </Flex>
    </>
  )
}

