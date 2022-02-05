import { Flex, Heading, Stack } from '@chakra-ui/react'
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
        <Stack display='flex' alignItems='center' width='100%' px={{ base: 12, md: 24 }} spacing='14'>
          <Heading color='gray.700'>Nossos clientes e parceiros</Heading>

            <Slick />
        </Stack>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='600px' height='100%' position='relative' bg='blue.500'>
        <AboutUsSection />
      </Flex>
    </>
  )
}

