import {  SimpleGrid, Icon, Text, Heading, Stack } from '@chakra-ui/react';
import { FeatureItem } from './FeaaturesItem';

import { MdSecurity, MdComputer } from 'react-icons/md'
import { FaRunning } from 'react-icons/fa'
import { BsListCheck } from 'react-icons/bs'

export function FeaturesSection() {
  return (
    <Stack display='flex' alignItems='center' direction={{ base: 'column', xl: 'row' }} spacing='32' p={4} maxWidth='8xl' mx='auto'>
        <Stack>
            <Heading color='gray.100'>Porque a conteud?</Heading>
            <Text color={'gray.400'} fontSize={'md'}>
                Entendemos que o feito é melhor que o perfeito, pois muitos problemas e 
                projetos são engavetados e procrastinados pela falta do sprint inicial.
                Trabalhamos por métodos ágeis, com a metodologia MVP (Mínimo Produto Viável) e 
                através da estratégia de usabilidade F.A.S.T aplicada pela CONTEUD.
            </Text>
        </Stack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} row={{ base: 'auto', lg: 2 }} spacing={6}>
        <FeatureItem
          icon={<Icon as={BsListCheck} w={8} h={8} color='green.500' />}
          title='Fácil'
          text={
            'É assim que o cliente quer acessar os produtos, serviços e as soluções da sua empresa.​'
          }
        />
        <FeatureItem
          icon={<Icon as={FaRunning} w={8} h={8} color='green.500' />}
          title='Agil'
          text={
            'Se a operação não estiver preparada e a resposta desejada pelo seu cliente não for ágil, perdeu!​'
          }
        />
        <FeatureItem
          icon={<Icon as={MdSecurity} w={8} h={8} color='green.500' />}
          title='Seguro'
          text={
            'A segurança vai além da LGPD. O consumidor 4.0 exige ser atendido por especialistas, numa empresa segura e confiável.​'
          }
        />
        <FeatureItem
          icon={<Icon as={MdComputer} w={8} h={8} color='green.500' />}
          title='Tecnológico'
          text={
            'O cliente quer estar bem informado. E a empresa precisa conectar e integrar todas as etapas da jornada da compra desde a captação ao engajamento.​'
          }
        />
      </SimpleGrid>
    </Stack>
  );
}