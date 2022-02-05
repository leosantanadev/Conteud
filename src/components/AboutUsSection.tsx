import { Container, Flex, GridItem, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export function AboutUsSection() {
    return (
        <Container maxW={'8xl'}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} row={{ base: 2, lg: 'auto' }} spacing={{ base: 36, lg: 12}}>
                <GridItem>
                    <Flex alignItems='center' justifyContent='center' height='100%'>
                        <Image
                            width={{ base: '100%', md: '90%' }}
                            rounded={'md'}
                            alt={'feature image'}
                            src='/team.jfif'
                            objectFit={'cover'}
                        />
                    </Flex>
                </GridItem>

                        
                <GridItem>
                    <Stack direction='column'>
                        <Heading color='green.500'>Sobre Nós</Heading>
                        <Text color={'gray.400'} fontSize={{ base: 'md', md: 'lg'}}>
                            Somos uma consultoria de transformação digital. Através de um time especialista, 
                            alinhado às principais metodologias de mercado e com experiência em diversos segmentos, 
                            estamos prontos para fazer o seu negócio prosperar.
                            Em conjunto com seu time, nosso propósito é trazer os resultados que você espera com tecnologia, inovação e escalabilidade.
                            <br />
                            <br />
                            {' '}
                            <Text fontWeight='600' color='green.500'>Fique tranquilo, trabalharemos juntos com você !</Text>
                        </Text>
                    </Stack>
                </GridItem>

            </SimpleGrid>
        </Container>
                        
    )
}