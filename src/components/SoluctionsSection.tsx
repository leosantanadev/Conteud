import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Icon,
    Accordion,
} from '@chakra-ui/react';

import { SoluctionContainer } from './SoluctionContainer';

import { FiUsers } from 'react-icons/fi'
import { AiOutlineLineChart } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'

const soluctionsData = [
    { title: 'Clientes e pessoas', icon: FiUsers, iconBg: 'blue.100', iconColor: 'blue.500', list: [
        'Publico alvo', 'personas e conteúdos', 'Funil de vendas - O sucesso do cliente','Estratégias de mídias digitais, performance e SEO',
        'Campanhas e stratégia de Omnichannel', 'Conexão aos marketplaces', 'Televendas Outsider'
    ]},
    { title: 'Gestão e Inteligência', icon: AiOutlineLineChart, iconBg: 'purple.100', iconColor: 'purple.500', list: [
        'Business plan e planejamento estratégico', 'Estruturação de canais de vendas, marketing e atendimento', 'KPIs e book de metas', 'Pricing e giro de estoque',
        'Gestão a vista (Business intelligence)', 'Ferramentas de inteligência de mercado', 'Gestão da mudança e aculturamento dos times', 'Expansão da cadeia de distribuição (B2B, B2C, F2C, C2C)',
        'Lider coaching e treinamentos operacionais'
    ]},
    { title: 'Tecnologia e inovação', icon: RiComputerLine, iconBg: 'yellow.100', iconColor: 'yellow.500', list: [
        'HUB - Integração e conexão de multiplataformas', 'Desenvolvimento de APIs e Webservice', 'Criação de sites', 'Desenvolvimento de APP de vendas',
        'Implantação de ERPs', 'Implantação e design de BI (Business intelligence)', 'Implantação de CRM e automação'
    ]}
]

  
export function SoluctionSection() {
    return (
        <Container maxW={'8xl'}>
        <SimpleGrid py={{ base: 38, md: 34 }} columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing='12'>
                <Stack spacing='4'>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg='blue.50'
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        Nossas soluções
                    </Text>
                    <Heading color='gray.700'>Algumas soluções da nossa empresa</Heading>
                    <Text color={'gray.500'} fontSize={'md'}>
                        Nossa equipe especializada junto com o seu time ira resolver o seu problema e 
                        implementaremos soluções que ajudarão seu ambiente de trabalho, algumas soluções como:
                    </Text>
                </Stack>

                <Stack spacing='3'>
                    <Text as='span' fontSize={14} fontWeight='bold' ml='3' color='green.500'>Clique na categoria e veja nossas soluçoes *</Text>
                    <Accordion allowToggle defaultIndex={[0]} bg='blue.50' p='4' borderRadius='lg'>
                        {soluctionsData.map(data => (
                            <SoluctionContainer
                                key={data.title}
                                icon={<Icon as={data.icon} color={data.iconColor} w={5} h={5} />}
                                iconBg={data.iconBg}
                                text={data.title}
                                panelContent={data.list}
                            />
                        ))}
                    </Accordion>
                </Stack>
            </Stack>

            <Flex>
                <Image
                    rounded={'md'}
                    alt={'feature image'}
                    src={
                    'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                    objectFit={'cover'}
                />
            </Flex>
        </SimpleGrid>
        </Container>
    );
}