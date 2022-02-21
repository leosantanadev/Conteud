import { Container, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AboutUsSection } from '../components/AboutUsSection'
import { AdvantagesSection } from '../components/AdvantagesSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import Slick from '../components/Slick'
import { SoluctionSection } from '../components/SoluctionsSection'

import { IoPhonePortraitOutline } from 'react-icons/io5'
import { FaLock, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { MdSell } from 'react-icons/md'
import { Footer } from '../components/Footer'

export default function Home<NextPage> () {
  const FirstAdvantagesSectionData = {
      image: '/client_bg.svg',
      sectionTitle: 'Vantagens para o seu cliente',
      list: [
        { 
          title: 'Praticidade', 
          text: 'O produto pode ser enviado ao endereço ou retirado pelo cliente na loja mais proxima sem fila e frete gratis.', 
          icon: IoPhonePortraitOutline,
        },
        { 
          title: 'Compra Segura', 
          text: 'Com poucos cliques o cliente realiza a compra e o pagamento pode ser feito diretamente na loja, app ou site.', 
          icon: FaLock,
        },
        { 
          title: 'Clientes Felizes', 
          text: 'Os clientes podem contar com depoimentos, avaliaçoes e conteudos sobre os produtos feitos na plataforma, integrado com as redes sociais.', 
          icon: FiUsers,
        }
      ]
  }

  const SecondAdvantagesSectionData = {
    image: '/company_bg.svg',
    sectionTitle: 'Vantagens para a sua empresa',
    list: [
      { 
        title: 'Estar no ecommerce', 
        text: 'Os canais online elevam sua marca e inverte a curva do custo de marketing a longo prazo.​', 
        icon: FaShoppingCart,
      },
      { 
        title: 'App ecommerce', 
        text: 'No novo varejo, é o cliente que escolhe se quer receber em casa ou retirar como drive thru. Transforme suas lojas físicas em minicentros de distribuição.​', 
        icon: MdSell,
      },
      { 
        title: 'Engaje seus clientes', 
        text: 'Torne o histórico de compras em novas oportunidades. Transforme o engajamento dos clientes em diferencial competitivo.​', 
        icon: FaUsers,
      }
    ]
}

  return (
    <>
      <Navbar />
      
      <Flex py={{ base: 24 }} width='100%' height='900px' position='relative' bg='blue.500'>
        <HeroSection />
      </Flex>

      <Flex py={{ base: 24 }} width='100%' minHeight='900px' height='100%' position='relative' bg='gray.50'>
        <SoluctionSection />
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='500px' height='100%' position='relative' bg='blue.500'>
        <FeaturesSection />
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='800px' height='100%' position='relative' bg='gray.50'>
        <AdvantagesSection data={SecondAdvantagesSectionData}/>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='800px' height='100%' position='relative' bg='blue.500'>
        <AdvantagesSection isReverseSectionContent data={FirstAdvantagesSectionData}/>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='500px' height='100%' position='relative' bg='white'>
        <Container display='flex' flexDirection='column' maxW={'8xl'} px={{ base: '10px', md: 24 }}>
          <Heading color='gray.700' textAlign='center' mb='14'>Nossos clientes e parceiros</Heading>

            <Slick />
        </Container>
      </Flex>

      <Flex py={{ base: 24 }} alignItems='center' width='100%' minHeight='600px' height='100%' position='relative' bg='blue.500'>
        <AboutUsSection />
      </Flex>

      <Footer />
    </>
  )
}

