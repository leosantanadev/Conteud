import { Box, SimpleGrid, Icon, Text, Heading, Stack } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { FeatureItem } from './FeaaturesItem';


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
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title='Fácil'
          text={
            'É assim que o cliente quer acessar os produtos, serviços e as soluções da sua empresa.​'
          }
        />
        <FeatureItem
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title='Agil'
          text={
            'Se a operação não estiver preparada e a resposta desejada pelo seu cliente não for ágil, perdeu!​'
          }
        />
        <FeatureItem
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title='Seguro'
          text={
            'A segurança vai além da LGPD. O consumidor 4.0 exige ser atendido por especialistas, numa empresa segura e confiável.​'
          }
        />
        <FeatureItem
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title='Tecnológico'
          text={
            'O cliente quer estar bem informado. E a empresa precisa conectar e integrar todas as etapas da jornada da compra desde a captação ao engajamento.​'
          }
        />
      </SimpleGrid>
    </Stack>
  );
}